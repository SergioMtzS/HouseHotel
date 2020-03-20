const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let habitacion = new Schema({

  _id:{
      type: String
  },
  
  name: {
       type: String
      },
   summary: {
    type: String
 },
    property_type: {
       type: String

      },
     beds: {
      type: Number
 },
 price: {
  type: Number
},
      bedrooms: {
        type:  Number
   },
   images: {
    type:  Object
},
	  bed_type: {
        type: String

               }
}, {
  collection: 'listingsAndReviews'
})

module.exports = mongoose.model('habitacion', habitacion)