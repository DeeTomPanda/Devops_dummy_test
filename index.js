<<<<<<< HEAD
import express from 'express';
import cors from 'cors'

//Consts & vars
const PORT=3500
=======
import express from 'express'
import cors from 'cors'

//VARS CONSTANTS

>>>>>>> 462fdbc (First commit)
const app=express()

//Middlewares

app.use(cors())
<<<<<<< HEAD
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes

//simple GET

app.get('/',(req,res)=>{
	res.status(200).send("Hello there")
})

app.listen(PORT,()=>console.log(`Running @ ${PORT}`))
=======


//Routes

app.get('/',(req,res)=>{
	res.end("HELLO WORLD")
})

app.listen(5555,()=>console.log("Hello"))
>>>>>>> 462fdbc (First commit)
