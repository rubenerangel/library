/**
 * Modulo de enrutamiento
 */

const express = require('express');
const router  = express.Router();
const service = require('./services/service');

// Rutas 
router.get('/', service.index);

router.get('/books', service.showBooks);

router.get('/addBook', service.addBook);

router.get('/editBook', service.editBook);

router.post('/updateBook', service.updateBook);

// Guardar el libro (enviar formulario)
router.post('/saveBook', service.saveBook);


// eliminar libro
router.get('/deleteBook', service.deleteBook);

// USUARIOS
router.get('/users', service.showUsers);
router.get('/addUser', service.addUser);
// Guardar el usuario (enviar formulario)
router.post('/saveUser', service.saveUser);
router.get('/editUser', service.editUser);
router.post('/updateUser', service.updateUser);
router.get('/deleteUser', service.deleteUser);

// Prestamos de Libros
router.get('/users-books', service.usersBooks);
router.post('/lendBook', service.lendBook);

module.exports = router;
