# Sistema de gestión prestamos de libros

## Base de datos MySQL
Antes de iniciar debes asegurarte de tener una Base de Datos en MySQL para gestionar el préstamo de libros.

En el archivo db.config.js se encuentra la configuración para la base de datos y el usuario de la base de datos. Puedes usar los datos que allí ya se encuentran o lo puedes adaptar a tus necesidades.

## Tablas
### books
CREATE TABLE `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `author` varchar(255),
  `category` varchar(255),
  `description` varchar(255),
  PRIMARY KEY (`id`)
);

### users
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255),
  `address` varchar(255),
  `phone` varchar(20)
);

### lend_book
CREATE TABLE `users` (
  `id_user` int(11),
  `id_book` int(11),
  `created_at` TIMESTAMP,
  `updated_at` TIMESTAMP
);

## Ejecutar el proyecto
Primero debes asegurarte de tener NodeJS instalado en tu computador. Luego debes ir hasta la carpeta donde se descargó  el proyecto y ejecutar **npm install** para instalar las librerias necesarias. Una vez instaladas las librerías ejecutamos **npm run start**
