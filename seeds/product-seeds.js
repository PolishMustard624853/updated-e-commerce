const { Product } = require('../models');

const productData = [
  {
    product_name: 'Long Sleeve Tee',
    price: 24.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Athletic Shorts',
    price: 55.99,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Skate Shoes',
    price: 109.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Five Panel Hats',
    price: 49.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Pink Floyd: The Wall',
    price: 13.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
