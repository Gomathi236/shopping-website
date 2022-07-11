const Sequelize = require('sequelize');


const sequelize = require('../util/database');

const Product = sequelize.define ('product',{
  id :{
    type :Sequelize.INTEGER,
    allownull : false,
    autoIncrement : true,
    primaryKey : true 
  },
  title :{
    type : Sequelize.STRING,
    allownull : false 
  },
  imageurl :{
    type : Sequelize.STRING,
    allownull : false 
  },
  price :{
    type : Sequelize.DOUBLE,
    allownull: false
  }
})




module.exports = Product;














































































