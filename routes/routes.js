const router=require("express").Router()

router.get("/ping",(req,res) =>{
    res.json({Response:"pong"})
}) 
module.exports = router;