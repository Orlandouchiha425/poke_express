const express=require('express');
const app=express();
const port=3000;
const pokemon=require('./models/pokemon');


//This is my React Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



//This is my Index Folder
app.get('/pokemon',(req,res)=>{
    res.render('Index',{pokemon})
})

//This is just Home Screen
app.get('/',(req,res)=>{
    res.send(`Welcome to the Pokemon App!`)
})



//setting up show route
app.get('/pokemon/:id',(req,res)=>{
    res.send(req.params.id)
})


//This is my port
app.listen(port,()=>{
    console.log('i am running')
})