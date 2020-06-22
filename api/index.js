const express = require('express')
const app = express()

let redis = require("redis"),
client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);



app.get('/multijobs', async (req,res) => {
    
    const get_jobs = await getAsync('Github');
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    console.log(JSON.parse(get_jobs).length);
    
    return res.send(get_jobs)
})

app.listen(3001, ()=>{
console.log("Listening on localhost:3001");
});