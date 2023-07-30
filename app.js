const express=require("express")
const API_KEY="5d5385595b4341579b9f60e1f9f01a1b"
const axios = require("axios")
const URL = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + API_KEY;
// let dist = require("geo-distance-js")
// let geodist= require("geodist")
const {headingDistanceTo}= require("geolocation-utils")

const app = express()

const sendAPIRequest = async (ipAddress) => {
    const apiResponse = await axios.get(URL + "&ip_address=" + ipAddress);
    return apiResponse.data;
}

app.post("/get-location",async(req,res)=>{
    // const ipAddress = req.socket.remoteAddress
    const ip="103.104.114.157"
    // let address=await sendAPIRequest(ip)
    // console.log(address)
    // const ipAddress = req.headers['x-forwarded-for']||req.socket.remoteAddress;
    // console.log(ipAddress)
    // res.send(ipAddress)
    // console.log(dist.getDistance())
    // let distance=dist.getDistance(28.6542,77.2373,28.5484,77.2513)
    // console.log(distance)
    // let dist = geodist({lat: 28.56405773055653, lon: 77.192354833367}, {lat: 28.480130, lon: 77.094667})
    let location1={lat: 28.56405773055653, lon: 77.192354833367}
    let location12={lat: 28.480130, lon: 77.094667}
    console.log(headingDistanceTo(location1,location12))
    // console.log(dist)
    
})


app.listen(4000,()=>{
    console.log("The server is up at 4000")
})