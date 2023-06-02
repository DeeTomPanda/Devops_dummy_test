import express from 'express';
import cors from 'cors'

//Consts & vars
const PORT=3500
const app=express()

//Middlewares

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes

//simple GET

app.get('/',(req,res)=>{
	res.status(200).send("Hello there")
})

app.listen(PORT,()=>console.log(`Running @ ${PORT}`))
