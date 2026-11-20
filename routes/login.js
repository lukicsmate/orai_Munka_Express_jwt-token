import express from 'express'
import db from '../dataBase/db.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const route = express()
route.use(express.json())
route.post('/',async (req,res)=>{
    let {Name,Password} = req.body ?? {};
    if(Name === undefined || Password === undefined)
    {     
        return res.status(404).json({message : "rossz adatbevitel"});
    }
    const SelectSql = `SELECT userid,username,role,password FROM users WHERE username = ?`;
    const [select] = await db.query(SelectSql,[Name])  
    const user = select[0];
    console.log(select);
    try {
        const compare = await bcrypt.compare(Password,select[0].password);
        if(compare){
            const token = jwt.sign(
                {userid:user.userid,
                 userName : user.username,
                 role : user.role},
                 process.env.JWT_SECRET, 
                 {
                    expiresIn:"1h"
                 }
                );
            
            return res.status(200).json({message : "sikeres login",token});
        }
        else{
            return res.status(404).json({error:"hibás bejelentkezési adatok"})
        }
    } catch (error) {
        return res.status(500).json({error:"error hiba"});
    }
})
export default route;