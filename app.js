const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const db = require("./util/database")

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");


const pageNotFoundController = require("./controllers/pagenotfound");
const sequelize = require("./util/database");


app.set('view engine', 'ejs');
app.set('views','views');


app.use('/public', express.static('public'));
app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));



app.use(bodyParser.urlencoded({ extended:true}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(pageNotFoundController.pageNotFound);


sequelize.sync()
.then(result =>{
    app.listen(3000)
}).catch(err => console.log(err));








