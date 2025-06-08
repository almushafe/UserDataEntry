const express = require('express')
const UserSd = require('./usermodel')
const path = require('path')
const app = express()
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/', async (req,res)=>{
    res.render('index')
})
app.post('/create',async (req,res)=>{
    let {name , username} = req.body
        const ad = await UserSd.create({
        name,
        username,
    })
    res.redirect('/read')
})
app.get('/read',async (req,res)=>{
    const find_s = await UserSd.find()
    res.render('READ',{find_s})
})
app.get('/delete/:id',async (req,res)=>{
    await UserSd.findOneAndDelete({_id:req.params.id})
    res.redirect('/read')
})
app.get('/update/:n_id',async (req,res)=>{
    const user = await UserSd.findById(req.params.n_id)

    res.render('update',{id:req.params.n_id,user})
})
app.post('/edit/:update_id',async (req,res)=>{  
    let {name,username} = req.body
    await UserSd.findOneAndUpdate(
        {_id:req.params.update_id},
        {$set:{name,username}},
        {new:true}
    )
    res.redirect('/read')
})

app.listen(3000)