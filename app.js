const express=require("express")


const app = express()

app.post("/get-location",(req,res)=>{
    // const ipAddress = req.socket.remoteAddress
    const ipAddress = req.headers['x-forwarded-for']||req.socket.remoteAddress;
    console.log(ipAddress)
    res.send(ipAddress)
})


app.listen(4000,()=>{
    console.log("The server is up at 4000")
})