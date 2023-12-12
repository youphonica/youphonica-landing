const { string, required, boolean } = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
    .then(() => {
        
    })
    .catch(err => {
        console.log("OH NO ERROR WITH MONGO!!!!")
        console.log(err)
    })

const mailListSchema = new mongoose.Schema({
    email:
    {   type: String,
        required: true,
        unique: true
    },
    doc: {
        type: Number,
        required: true
    },

})



//sign in


const mailList = mongoose.model('User', mailListSchema)

module.exports = mailList

