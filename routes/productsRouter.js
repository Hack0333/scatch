import { Router } from 'express';

const router = Router();

router.get("/",(req,res)=>{
    res.send("product router");
})

export default router;