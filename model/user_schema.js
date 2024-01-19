const mongoose = require('mongoose')
let Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        trim: true,
    },
    quiz1: {
        type: Number
    },
    quiz2: {
        type: Number
    },
    quiz3: {
        type: Number
    },
    quiz4: {
        type: Number
    },
    hquiz1: {
        type: Number
    },
    hquiz2: {
        type: Number
    },
    hquiz3: {
        type: Number
    },
    fquiz1: {
        type: Number
    },
    fquiz2: {
        type: Number
    },
    gquiz1: {
        type: Number
    },
    gquiz2: {
        type: Number
    },
    squiz1: {
        type: Number
    },
    squiz2: {
        type: Number
    },
    kquiz1: {
        type: Number
    },
    kquiz2: {
        type: Number
    },

})

const User = mongoose.model("User_dashboard", userSchema)

module.exports = User