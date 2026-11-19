import express from 'express'
import db from '../dataBase/db.js'
import bcrypt from 'bcrypt'
const route = express()
route.use(express.json())
route.post('/',async (req,res)=>{
    let {Name,Password} = req.body ?? {};
    if(Name === undefined || Password === undefined)
    {
         
        return res.status(404).json({message : "rossz adatbevitel"});
    }
    let passwordHash = await bcrypt.hash(Password,10);
    const sql = `INSERT INTO users (userid,username,password,role) VALUES(NULL,?,?,'user')`;
    try {
        const resoult =await db.query(sql,[Name,passwordHash]);
        const affectedRows = resoult.affectedRows;
        if (affectedRows===0) {
            return res.status(400).json({error : "A post nem történt meg"});
        } else {
            return res.status(201).json({message: "Sikeres Registráció"});        
        }
    } 
    catch (error) {
        return res.status(500).json({error : error});
    }    
})
export default route;