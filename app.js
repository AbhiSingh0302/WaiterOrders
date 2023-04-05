const express = require('express');

const bodyParser = require('body-parser');

const Orders = require('./utils/database');

const path = require('path');

const app = express();

app.use(bodyParser.json())

app.post('/order/:id',async (req,res,next) => {
    console.log(req.params);
    const order = await Orders.findOne({ where: { id: req.params.id } });
if (order) {
  order.destroy();
  res.json({
    "message": "Successfully Updated",
    "data": order
  })
} else {
  console.log("User not found");
  res.json({
    "message": "User not found",
  })
}
})

app.get('/all-orders',(req,res,next) => {
    Orders.findAll()
    .then(orders => {
        console.log(orders);
        res.json(orders);
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({
            "message": "Failed!!"
        })
    })
})

app.post('/orders',(req,res,next) => {
    console.log(req.body);
    Orders.create({
        'price': req.body.price,
        'dish': req.body.dish,
        'table': req.body.table
    })
    .then(order => {
        res.json({
            "message": "Successfully Submitted",
            "data": order
        })
    })
    .catch(err => {
        res.status(400).json({
            "message": "Failed"
        })
    })
})

app.use('/',(req,res,next)=>{
    res.sendFile(path.resolve('index.html'));
});

app.listen(3000);