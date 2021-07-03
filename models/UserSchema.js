
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    wname:{
        type:String,
        required: true
    },
    wammo:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    }
})

const User = mongoose.model('PUBG weapons', UserSchema)

module.exports = User;