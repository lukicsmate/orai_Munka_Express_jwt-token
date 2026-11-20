import express from 'express'
import db from '../dataBase/db.js'
import auth from './authentication.js'
const route = express()
route.use(express.json())
route.post('/',auth, async (req,res)=>{
    const userid = req.user.userid;
    const sql = `SELECT * FROM users WHERE userid = ?
    `
    try {
        const [select] = await db.query(sql,[userid]);    
        if(select){
            return res.status(201).json({message: "profil",select});
        }else{
            return res.status(404).json({error:"nincs ilyen profil"})
        }
    } catch (error) {
        return res.status(404).json({error:error})
    }
    
})
export default route