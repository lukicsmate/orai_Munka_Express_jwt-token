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
    const SelectSql = `SELECT username,role,password FROM users WHERE username = ?`;
    try {
        const [select] = await db.query(SelectSql,[Name])    
    } catch (error) {
        return res.status(500).json({error:error})
    }
    const compare = await bcrypt.compare(Password,select);
    if(compare){
        jwt.sign({userName : Name,},process.env.JWT_SECRET, {expiresIn:"1h"})
    }
    
})
export default route;