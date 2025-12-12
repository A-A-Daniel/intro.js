require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.port; // 3000;

app.use(express.json()); // JSON parsing

app.use((req,res) => {
    res.status(404).send("Page not found :("); // Error handling
});

app.use((req,res,next) => {
    // logs every request
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next(); // Passes it to the next handler
});


app.get('/',(req,res) => {
    res.send('My Week 2 API');
});


app.post('/user',(req,res) => {
    const {name, email} = req.body;
    if(!name || !email) return res.status(400).json({error: 'Missing fields'}); // Error handling
    res.status(201).json({message: `Hello ${name}`});
});


app.get('/user/:id', (req,res) => {
    res.json({id:req.params.id});
});


app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
})