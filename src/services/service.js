const db   = require('../../db');

// Renderizar la página principal
exports.index = (req,res)=>{
  console.log('Página principal');
  
  res.render('index');
};

exports.showBooks = (req,res)=>{
  console.log('Página principal');
  let sql = 'select * from books';
  db.base(sql,null,(result)=>{
      res.render('indexBooks',{list : result});
  });
};

// agregar libro
exports.addBook = (req,res)=>{
  console.log('Agregar libro');
  res.render('addBook');
};

// Editar libro
exports.editBook = (req,res)=>{
  console.log('Editar libro');
  // res.send ('Editar libro');
  let id = req.query.id;
  let sql = 'select * from books where id=?';
  let data = [id];
  db.base(sql,data,(result)=>{
      res.render('editBook',result[0]);
  });
};

// eliminar libro
exports.deleteBook = (req,res)=>{
  console.log('Eliminar libro');
  
  let id = req.query.id;
  let sql = 'delete from books where id=?';
  let data = [id];
  db.base(sql,data,(result)=>{
      if(result.affectedRows == 1){
          res.redirect('/');
      }
  });
};

// guarda el libro
exports.saveBook = (req,res)=>{
  console.log('Agregar libro (enviar formulario)');
  
  let info = req.body;
  let book = {};
  for(let key in info){
      book[key] = info[key];
  }
  let sql = 'insert into books set ?';
  db.base(sql,book,(result)=>{
      if(result.affectedRows == 1){
          res.redirect('/');
      }
  });
};


// Editar libro
exports.updateBook = (req,res)=>{
  console.log("Editar formulario de envío de libros");

  let info = req.body;
  let sql = 'update books set name=?,author=?,category=?,description=? where id=?';
  let data = [info.name,info.author,info.category,info.description,info.id];
  db.base(sql,data,(result)=>{
      if(result.affectedRows == 1){
          res.redirect('/');
      }
  });
};

// Listar usuarios
exports.showUsers = (req, res) => {
  console.log("Show Users");

  let sql = 'select * from users';
  db.base(sql,null,(result)=>{
      res.render('indexUsers',{list : result});
  });
};

// agregar usuario
exports.addUser = (req,res)=>{
  console.log('Agregar usuario');
  res.render('addUser');
};

// Insertar usuario
exports.saveUser = (req,res)=>{
  console.log('Agregar Usuario (enviar formulario)');
  
  let info = req.body;
  let user = {};
  for(let key in info){
      user[key] = info[key];
  }
  let sql = 'insert into users set ?';
  db.base(sql,user,(result)=>{
      if(result.affectedRows == 1){
          res.redirect('/users');
      }
  });
};

// Editar suario
exports.editUser = (req,res)=>{
  console.log('Editar usuario');
  // res.send ('Editar libro');
  let id = req.query.id;
  let sql = 'select * from users where id=?';
  let data = [id];
  db.base(sql,data,(result)=>{
      res.render('editUser',result[0]);
  });
};


// Actualizar usuario
exports.updateUser = (req,res)=>{
  console.log("Editar formulario de envío de usuario");

  let info = req.body;
  let sql = 'update users set name=?,address=?,phone=? where id=?';
  let data = [info.name,info.address,info.phone,info.id];
  db.base(sql,data,(result)=>{
      if(result.affectedRows == 1){
          res.redirect('/users');
      }
  });
};

// eliminar Usuario
exports.deleteUser = (req,res)=>{
  console.log('Eliminar user');
  
  let id = req.query.id;
  let sql = 'delete from users where id=?';
  let data = [id];
  db.base(sql,data,(result)=>{
      if(result.affectedRows == 1){
          res.redirect('/users');
      }
  });
};

exports.usersBooks = (req,res)=>{
  console.log('Prestamos de libros');

  let sql = 'select * from users; select * from books; SELECT u.name AS usuario, b.name AS libro FROM lend_book AS lb INNER JOIN users AS u ON lb.id_user = u.id INNER JOIN books AS b ON lb.id_book = b.id';
  
  db.base(sql,null,(result)=>{
    res.render('lendBook',{users : result[0], books: result[1], lends: result[2]});
  });
}

exports.lendBook = (req,res)=>{
  console.log('Prestamos de libros');

  let info = req.body;
  console.log(info, 'info');
  let lend = {};
  for(let key in info){
      lend[key] = info[key];
  }
  let sql = 'insert into lend_book set ?';
  db.base(sql,lend,(result)=>{
    if(result.affectedRows == 1){
        res.redirect('/users-books');
    }
  });
};
