var orm = require('../config/orm.js');

var burger = {
   selectAll: function(cb){
     orm.selectAll("burgers", function(res){
       cb(res);
     });
   },
   insertOne: function(newBurgerName, cb){
     orm.insertOne("burgers", "burger_name", newBurgerName, function(res){
       cb(res);
     });
   },
   updateOne: function(booleanVal, idVal, cb){
     orm.updateOne("burgers", "devoured", booleanVal, idVal, function(res){
       cb(res);
     });
   }
 };

module.exports = burger;