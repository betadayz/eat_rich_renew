const express = require("express");
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressValidator = require("express-validator");
require("dotenv").config();

// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log('DB Connected'));


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());


app.use("/eatrich",authRoutes);
app.use("/eatrich",userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});