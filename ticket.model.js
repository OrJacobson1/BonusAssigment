const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Ticket = new Schema({
    owner:{
        type: String,
        required: true,
    },
    isValid : {
        type: String,
        required: true,
    },
    price: {
        type:Number,
        required: true
    },
    details:{
        type:String,
        required:true,
    }
})
const TicketModel = mongoose.model("Ticket", Ticket)

module.exports = TicketModel