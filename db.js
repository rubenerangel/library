/*
         Definir la función de consulta de la base de datos
*/
var mysql = require('mysql');
var databaseConfig = require('./db.config.js');  // Introduce los datos en el módulo de configuración de la base de datos

// Método de exposición externa
module.exports = {
    base : (sql,params,callback) => {
         // Crear conexión a la base de datos
        const connection = mysql.createConnection(databaseConfig);  

        // Realizar operación de conexión
        connection.connect(); 

        // Operar la base de datos (las operaciones de la base de datos también son asincrónicas)
        connection.query(sql,params, function(error, results, fields) {
            if (error) throw error;
            callback(results);
        });

        // cerrar la base de datos
        connection.end();
    }
};
