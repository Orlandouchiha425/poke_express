require('dotenv').config()
console.log(process.env.MONGO_URI)
const express=require('express');
const app=express();
const port=3000;
const Pokemon=require('./models/pokemon');
const mongoose=require('mongoose');

//This is my React Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



//mongoose connect to get rid of deprecation warnings
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})




//middleware
app.use(express.urlencoded({extended:true}))
app.use((req,res,next)=>{
    console.log(req.body)
    next()
})





//This is my Index Folder
app.get('/pokemon',(req,res)=>{
    Pokemon.find({},(err, foundPokemon)=>{
        if(err){
            res.status(400).send(err)
        }else{
            res.render('Index',{
                pokemon:foundPokemon
            })
        }
    })
});


//This is just Home Screen
app.get('/',(req,res)=>{
    res.send(`Welcome to the Pokemon App!`)
})

//NEW

app.get('/pokemon/new',(req,res)=>{
    res.render('New')
})





//This is my Create Route
app.post('/pokemon',(req,res)=>{
   Pokemon.create(req.body,(err, createdPokemon)=>{
       if(err){
           res.status(403).send(err)
       }else{
           console.log(createdPokemon)
           res.redirect('/pokemon')
       }
   })
})





//setting up show route
app.get('/pokemon/:id',(req,res)=>{
    Pokemon.findById(req.params.id,(err,foundPokemon)=>{
        if(err){
            res.status(400).send(err)
        }else{
            res.render('Show',{
                pokemon:foundPokemon
            })
        }
    })
    // res.render('Show',{
    //     pokemon:pokemon[req.params.id]
    //  })
})

//This is my port
app.listen(port,()=>{
    console.log('i am running')
})