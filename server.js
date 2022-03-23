const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const template    = require('art-template');
const path        = require('path');

const app = express();

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'art');
app.engine('art', require('express-art-template'));

let corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;


const router = require('./src/router');

// Configurando enrutamiento
app.use(router);

// Puerto de escucha
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
