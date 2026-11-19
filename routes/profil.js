import express from 'express'
const route = express().Router()
route.use(express.json())
route.post('/profil',async (req,res)=>{
    return res.status(201).json({message: "profil létrehozva"});
})
export default route