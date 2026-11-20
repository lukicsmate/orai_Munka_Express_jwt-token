import express from 'express';
import auth from './authentication.js';
import db from '../dataBase/db.js';
import roleAuth from './roleAuth.js';
const route = express()
route.use(express.json());
route.post('/',auth,roleAuth,async (req,res)=>{
    try {
        const sql = `SELECT * FROM users
        `
        const [user] = await db.query(sql);
        return res.status(201).json({message: `Felhasználók`,user});
    } catch (error) {
        return res.status(500).json({error: 'Internal server error'})
    }

    
})
export default route