const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customer = new Schema({
  
  Address: {
       type: String
      },
   City: {
    type: String
 },
    Country: {
       type: String

      },
     District: {
      type: String
 },
      FirstName: {
        type: String
   },
	  LastName: {
        type: String

               },
	    Status: {
        type: Boolean
 }
}, {
  collection: 'Customers'
})

module.exports = mongoose.model('Customer', Customer)