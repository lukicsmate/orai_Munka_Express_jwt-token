import jwt from 'jsonwebtoken'
import 'dotenv/config'
const auth = (req,res,next)=>{
    const authHeader = req.header.authorization;
    const token = authHeader.split(' ')[1];
    const hash = jwt.verify(token,process.env.JWT_SECRET);
    
}