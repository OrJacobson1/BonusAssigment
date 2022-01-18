const express = require("express");
const Ticket = require('../models/ticket.model')

const router = express.Router();

router.get('/', async(req,res) => {
    const allTickets = await Ticket.find();
    res.status(200).send(allTickets);
})
router.post('/', async(req,res) =>{
    const {owner, isValid, price, details} = req.body
    const isSuccess = await Ticket.create({
        owner,
        isValid,
        price,
        details
    })
    console.log(isSuccess)
    if(isSuccess){
        res.status(200).send({msg: "success"})
    }
})

router.delete('/:id', async(req,res) =>{
    const {id} = req.params;
    const didDelete = await Ticket.findByIdAndDelete(id)
    console.log(didDelete);
    res.status(200).send({msg: "success"})
})

router.put('/not-valid/:id' , async(req,res) => {
    const {id} = req.params;
    const ticketToValidate = await Ticket.findByIdAndUpdate(id,{
        isValid:false
    })
    console.log(ticketToValidate);
    res.status(200).send("all good")
})
module.exports = router;