const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const atmmodel = require('./models/Atmcarddatamodel');
//middleware
app.use(cors());
app.use(express.json());

// db connection
mongoose.connect("mongodb://127.0.0.1:27017/atm").then(() => { console.log("database connection done") }).catch((err) => console.log(err, err.message))
//api's
app.get("/api/data", (req, res) => {
    res.send({ data: "this is server running on port number 3000" })
})

app.post('/atmcarddata', async (req, res) => {
    const atmdata = new atmmodel(req.body);
    await atmdata.save().then(() => console.log("save successfully"));
    res.json({ msg: "data save successfully" })
})

app.patch('/atmcarddata', async (req, res) => {
    const re = await atmmodel.findOne({ cardnumber: req.body.cardnumber })
    res.json(re);
})

app.get('/atmcarddata', async (req, res) => {
    const re = await atmmodel.find()
    res.json(re);
})
app.listen(3000, () => { console.log("server is running on port number 3000") })