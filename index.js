const express = require('express')
const app = express()
const port = 3000
const Resapi= require('./data/resapi.json')
const Chefs=require('./data/chef.json')
var cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
  res.send('backend running!')
})
app.get('/resapi',(req,res)=>{
    res.send(Resapi)
})
app.get('/resapi/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const menu=Resapi.find(menu => menu.id === id) || {}
    res.send(menu)
})
app.get('/chef',(req,res)=>{
    res.send(Chefs)
})
app.get('/chef/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const chef=Chefs.find(data => data.id === id) || {}
    res.send(chef)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})