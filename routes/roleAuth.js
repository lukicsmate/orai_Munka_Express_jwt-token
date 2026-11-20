import jwt from 'jsonwebtoken';
import 'dotenv/config';
import db from '../dataBase/db.js';
const roleAuth = async (req,res,next)=>{
    const user = req.user
    const sqlCheck = `SELECT role FROM users WHERE userid = ?`
    const [select] = await db.query(sqlCheck,[user.userid])
    const sqlRole = select[0].role
    if(user.role === "admin" && sqlRole === "admin"){
        next();
    }
    else{
        return res.status(403).json({
            error: "Erre a parancsra nincs felhatalmazása"
        });
    }
}
export default roleAuth;