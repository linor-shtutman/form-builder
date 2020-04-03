
const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

require('./api/models/formsModel');
require('./api/models/fieldsModel');
require('./api/models/submissionsModel');

const forms = require('./api/routes/formsRoutes');
const fields = require('./api/routes/fieldsRoutes');
const submissions = require('./api/routes/submissionsRoutes');

const app = express()
const port = process.env.PORT || 8080

mongoose.Promise = global.Promise;
mongoose.connect('mongodbmongodb+srv://admin:admin123@cluster0-emqe0.mongodb.net/formBuilder?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

forms(app);
fields(app);
submissions(app);

app.listen(port);
app.get('/', (req, res) => res.send('Hello World!'))
console.log("server is up");