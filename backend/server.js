const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const { payment } = require("./db/schema");
const cors=require('cors')

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors({origin:"https://payment-form-pearl.vercel.app",
    methods:["GET","POST","PUT","DELETE"],credentials:true
}))

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.post("/payment", (req, res) => {
  const { name, email, amount } = req.body;
  const newPayment = new payment({ name, email, amount });
  newPayment?.save()
    .then(() => res.json({ message: "Payment details saved successfully" }))
    .catch((err) => res.status(500).json({ error: "Failed to save payment details", details: err }));
});

app.get("/payments", async (req, res) => {
  const { name, email } = req.headers;
  try {
    const payments = await payment.find({ name, email });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch payment records", details: err });
  }
});

mongoose.connect(process.env.MONGO_URI, {  dbName: "paymentDB" });

app.listen(3000, () => {
  console.log("Server running on port 3000");
});