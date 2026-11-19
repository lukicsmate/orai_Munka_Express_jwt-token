import express from 'express'
const route = express()
route.use(express.json())
route.post('/profil/:id',async (req,res)=>{
    return res.status(201).json({message: "profil létrehozva"});
})
export default route