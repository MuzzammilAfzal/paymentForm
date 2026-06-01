const mongoose=require("mongoose")


const paymentSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    amount:{ type: Number, required: true },
})

const payment = mongoose.model("payment",paymentSchema)

module.exports={
    payment
}