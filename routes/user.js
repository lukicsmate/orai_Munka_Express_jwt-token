import express from 'express'
const route = express()
route.use(express.json())
route.delete('/user/:id',async (req,res)=>{
    let id = req.params.id;
    if(!parseInt(Number(id) >0)){return res.status(404).json({error : "Érvénytelen azonosító    "});   }
    return res.status(201).json({message: `${id}Felhasználó törölve`});
})

export default route