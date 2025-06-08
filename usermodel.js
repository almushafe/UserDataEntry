const mongooes = require('mongoose');

mongooes.connect('mongodb://localhost:27017/user')

const UserSchema = mongooes.Schema({
    name:String,
    username:String
})

module.exports = mongooes.model('Users',UserSchema)