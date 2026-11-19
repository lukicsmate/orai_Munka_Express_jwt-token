import express from 'express'
const route = express().Router()
route.use(express.json())
route.post('/login',async (req,res)=>{
    return res.status(201).json({message: "Profil megtekintése"});
})
export default route