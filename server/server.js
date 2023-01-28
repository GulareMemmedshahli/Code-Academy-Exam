const express = require('express')
const app = express()
const port = 8000
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    img:String,
    name: String, 
    title:String,
    price:Number,
})

const Student = mongoose.model('/student', studentSchema);
app.use(cors())
app.use(bodyParser.json())

app.get('/student', (req, res) => {
 Student.find({},(err,docs)=>{
if(!err){
    res.send(docs)
}
})
})

app.get("/student/:id",(req,res)=>{
    const id=req.params.id
    Student.findById(id,(err,docs)=>{
     if(!err){
        res.send(docs)
     }
    })
})

app.delete("/student/:id",(req,res)=>{
    const id=req.params.id
    Student.findByIdAndDelete(id,(err,docs)=>{
        if(!err){
            res.send(docs)
         }
    })
})

app.post("/student",(req,res)=>{
    let students=new Student({
        img:req.body.img, 
        name:req.body.name,
        title:req.body.title,
        price:req.body.price,
    })
    students.save()
})


mongoose.connect("mongodb+srv://gulare:gulareM@cluster0.mg9m8t8.mongodb.net/?retryWrites=true&w=majority",
(err)=>{
    if(!err){
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
  }
}
);
