import express from 'express'
import auth from './authentication.js'
const route = express()
route.use(express.json())
route.post('/profil/:id',auth, async (req,res)=>{
    return res.status(201).json({message: "profil létrehozva"});
})
export default route