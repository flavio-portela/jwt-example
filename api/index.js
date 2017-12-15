require('dotenv').config();
const bodyParser = require('body-parser');
const express =  require('express');
const helmet = require('helmet');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet());

app.use(cors());

app.use( bodyParser.json() ); 

app.use( bodyParser.urlencoded({ extended: true }) );

app.use('/', require('./controllers'));

app.use(require('./middlewares/errorhandler'));

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));