const express =require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const path=require('path');
const bodyparser=require('body-parser')

const port=3000 || process.env.port
dotenv.config()

const app=express()


//requiring contact rouit


const dashboardrouter = require('./routes/dashboardRoute');

const projectsrouter = require('./routes/projectsRoute');



//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//midlleware or configuration
app.use(cors())
app.use(express.urlencoded({ extended:false}))
//app.use(express.json())

app.use(bodyparser.json({extended:false}))

//public static style path
app.use(express.static(path.join(__dirname, 'public')));



app.use(dashboardrouter);

app.use(projectsrouter);


app.listen(port,()=>{
    console.log("server started")
})
