const router=require("express").Router()

router.get("/ping",(req,res) =>{
    res.json({Response:"pong"})
}) 

router.post("/pong",(req,res)=>{
    const request=req.body
    if(request.ping){
        res.json(request)
    }else{
        res.status(400).json({Error:"Not allowed"})
    }
})

router.patch("/pingpong",(req,res)=>{
    const request=req.body
    if(request._id == "ping"){
        res.json({Response:"Pong"})
    }else{
        res.status(400).json({Error:"Not allowed"})
    }
})
module.exports = router;