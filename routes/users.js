import express from 'express';
const route = express().Router();
route.use(express.json());
route.get('/users',async (req,res)=>{
    return res.status(200).json({message : "felhasználók listája"});
})