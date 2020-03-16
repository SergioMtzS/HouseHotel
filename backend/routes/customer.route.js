const express = require('express');
const app = express();
const customerRoute = express.Router();

let CustomerModel = require('../model/Customer');


customerRoute.route('/create-customer').post((req, res, next) => {
  CustomerModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


customerRoute.route('/').get((req, res) => {
  CustomerModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


customerRoute.route('/findOne').get((req, res) => {
 
  CustomerModel.findOne(function (error, data) {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  }).sort({_id:-1})
})

customerRoute.route('/find/:search').get((req, res) => {
  CustomerModel.find({$or :[{FirstName: req.params.search},{City:req.params.search}]},(error, data) => {
    if (error) {
      return next(error);
      console.log("error")
    } else {
      res.json(data)
      console.log(res)
    }
  })
})


customerRoute.route('/get-customer/:id').get((req, res) => {
  CustomerModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



customerRoute.route('/update-customer/:id').put((req, res, next) => {
  CustomerModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Song successfully updated!')
    }
  })
})



customerRoute.route('/delete-customer/:id').delete((req, res, next) => {
  CustomerModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = customerRoute;