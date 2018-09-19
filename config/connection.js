var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
   connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Scout825',
      database: 'burgers_db'
   });
};

connection.connect(function (err) {
   if (err) {
      console.error("connection error stack: " + err.stack);
      return;
   };

   console.log("connected to burders_db with thread ", connection.threadId);

});

module.exports = connection;