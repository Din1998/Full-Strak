const product = require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');

const products = require('../data/product.json');

//setting detenv file 
dotenv.config({ path: 'Backend/config/config.env'});

connectDatabase();

const seedProduct = async () => {
  try{
    await product.deleteMany();
    console.log('Products are deleted');

    await product.insertMany(products);
    console.log('All Products are added');
    
  } catch(error){
    console.error(error.message);
    process.exit();
  }
};

seedProduct();