const express = require('express');
const app = express();
const customerRoute = express.Router();
<<<<<<< HEAD
//const AuditTask = require('./AuditTask')

let CustomerModel = require('../model/Customer');
let HabModel = require('../model/habitacion');
=======

let CustomerModel = require('../model/Customer');
>>>>>>> fbfb2abea78c61208e7983d3b301f64d6f802760


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

<<<<<<< HEAD
customerRoute.route('/aggregate/:id').get((req, res) => {
  console.log(req.params.id)

  CustomerModel.aggregate([{$match:{_id:Number(req.params.id)}},{$lookup: {from: 'listingsAndReviews', localField: 'bedrooms.id', foreignField: '_id', as: 'habitacion'}}],(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


customerRoute.route('/perfil').get((req, res) => {
  HabModel.find((error, data) => {
=======

customerRoute.route('/findOne').get((req, res) => {
 
  CustomerModel.findOne(function (error, data) {
>>>>>>> fbfb2abea78c61208e7983d3b301f64d6f802760
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


<<<<<<< HEAD
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
  CustomerModel.find({$or :[{FirstName: req.params.search},{City:req.params.search},{Country:req.params.search}]},(error, data) => {
    if (error) {
      return next(error);
      console.log("error")
    } else {
      res.json(data)
      //console.log(res)
    }
  })
})

customerRoute.route('/findPrice/:min/:max').get((req, res) => {
  HabModel.find({$and:[{price:{$gte:Number(req.params.min)}},{price:{$lte:Number(req.params.max)}}]},(error, data) => {
    if (error) {
      return next(error);
      console.log("error")
    } else {
      res.json(data)
      //console.log(res)
    }
  })
})

customerRoute.route('/Habfind/:search').get((req, res) => {
  HabModel.find({property_type:req.params.search},(error, data) => {
    if (error) {
      return next(error);
      console.log("error")
    } else {
      res.json(data)
      //console.log(res)
    }
  })
})


=======
>>>>>>> fbfb2abea78c61208e7983d3b301f64d6f802760
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
<<<<<<< HEAD
  console.log(req.body)
=======
>>>>>>> fbfb2abea78c61208e7983d3b301f64d6f802760
  CustomerModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Customer successfully updated!')
    }
  })
})

<<<<<<< HEAD
customerRoute.route('/update-customer-push/:id/:idH').put((req, res, next) => {
  console.log(req.params.id)
  CustomerModel.findByIdAndUpdate(req.params.id, {
    $push: {bedrooms:{id:req.params.idH}} 
  }, (error, data) => {
    if (error) {
      console.log("ERROR")
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Customer successfully updated!')
    }
  })
})



=======
>>>>>>> fbfb2abea78c61208e7983d3b301f64d6f802760


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