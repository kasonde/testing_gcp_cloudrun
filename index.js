const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.send("Hello from Richard Nsama");
})


app.listen(8080, function(){
    console.log("Simple app started 🚀");
})
