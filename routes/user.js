import express from 'express'
import db from '../dataBase/db.js'
import auth from './authentication.js'
import roleAuth from './roleAuth.js'
const route = express()
route.use(express.json())
route.post('/:id',auth,roleAuth,async (req,res)=>{
    let id = req.params.id;
    if(parseInt(Number(id) <0)){return res.status(404).json({error : "Érvénytelen azonosító    "});   }
    try {
        const sql = `SELECT * FROM users WHERE userid = ?
        `
        const [user] = await db.query(sql,[id]);
        return res.status(201).json({message: `${id}Felhasználó`,user});
    } catch (error) {
        return res.status(500).json({error:error})
    }

})

export default route