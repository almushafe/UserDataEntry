# Loops 

- forEach
- map
- filter
- find
- indexOf

# file system
    const fs = require('fs')
- unlink  = delete
- writefile = create file
- appendfile = add data
- rename = rename file
- copyfile = porani file ko nahi file ma copy karnaq
- rmdir = blank folder remove 
- rm = folder delete 
- readfile = file prhna

# HTTP
    http = require('http')

``` 
const http = require('http')

    const server = http.createServer(function(req,res){
    res.end('Hello, World!')
    })
server.listen(3000) 
```

# Express.js

```
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)
```
- server create
- routs create
- midlewere
- request and response handling
- error handling

```
app.use((err,req,res,next)=> {
  console.error (err.stack)
  res.status(500).send('Something broke!')
})

```

# Form Handling

- Sessions
- Cookies 
###  **Parser**
```
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
```


# Master EJS

- Ejs Setup 
``` npm i ejs ```
- setup public folder
```

```
- Dynamic Routing


# Mongo DB
###  Backend Server 
- application server
- Data base server
### Data Storage :
> DataBase --> Collection --> Document

| Code  |                 DATABASE |
| ----------------- |------------------ |
| mongoose.connect| Databas Create |
| Model create | Collection Create |
| CREATE | Document Create|


- mongodb connection
- schema
- modle

### **CRUD Operations**

- C – Create
> **Create Method funtion js**
```
create()
save()
```
- R – Read
> **Read Method Function js**
```
find()
findOne()
```
- U – Update
> **Update Method Function js**
```
findOneAndUpdate()
```
- D – Delete
> **Delete Method Function js**
```
findOneAndDelete()
deleteOne()

```

const userModele = require('./usermodel')
const express = require('express')

const app = express()


//  C - Create
app.get('/create',async (req,res)=>{
   let createduser = await userModele.create({
        name:'Muhammad',
        username:"muhammadbahi",
        email:"not"
    })
    res.send(createduser)
})



// U - Ubdate
app.get('/ubdate', async (req,res)=>{
    const Ubdate = await userModele.findOneAndUpdate({_id:"6841e93f404f71fe16ec2097"},{name:"bahi"},{new:true})
    res.send(Ubdate)
})


// R - Read
app.get('/',async (req,res)=>{
    const Users = await userModele.find()
    res.send(Users)
})


// D - Delete
app.get('/delete',async (req,res)=>{
    const DeleteDB = await  userModele.findOneAndDelete({name:'Muhammad'})
    res.send(DeleteDB)
})




app.listen(3000,()=>{
    console.log('ready');
    
})



```











# importent command
* Package.json
> ``` npm init -y ```
* Express
> ``` npm i express ```
* mongo DB
> ``` npm i mongoos ```

> ``` npm init -y ```


