var connection = require('../config/connection.js');

var orm = {
   selectAll: function (tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function (err, result) {
         if (err) {
            throw err;
         }
         cb(result);
      });
   },

   insertOne: function (table, col, burgerName, cb) {
      var queryString = "INSERT INTO " + table + "(" + col + ") VALUES (?)";

      connection.query(queryString, [burgerName], function (err, result) {
         if (err) {
            throw err;
         }
         cb(result);
      });
   },

   updateOne: function (table, colName, colVal, idVal, cb) {
      var queryString = "UPDATE " + table + " SET " + colName + " = (?) WHERE id = (?)";

      connection.query(queryString, [colVal, idVal], function (err, data) {
         if (err) throw err;
         callback(data);
      });
   },


};

module.exports = orm;