import bcrypt from "bcryptjs/dist/bcrypt.js";

const data = {
  users:[
    {
      name: 'Dennis',
      email: 'dennis.prichodko59@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Max',
      email: 'HettlerM.wwi20@student.dhbw-heidenheim.de',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },

    {
      name: 'Hasan',
      email: 'HajiH.wwi20@student.dhbw-heidenheim.de',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
    {
      name: 'Test',
      email: 'TEst.wwi20@student.dhbw-heidenheim.de',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

    products: [
      {
       
        name: 'Nike Slim Shirt',
        category: 'Shirts',
        image: '/images/drivers_license3.png',
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
       
        name: 'Adidas Fit Shirt',
        category: 'Shirts',
        image: '/images/gamepack.png',
        price: 100,
        countInStock: 5,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
       
        name: 'Lacoste Free Shirt',
        category: 'Shirts',
        image: '/images/ladies_night.png',
        price: 220,
        countInStock: 0,
        brand: 'Lacoste',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        
        name: 'Nike Slim Pant',
        category: 'Pants',
        image: '/images/schnaps_idee.png',
        price: 78,
        countInStock: 20,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
       
        name: 'Puma Slim Pant',
        category: 'Pants',
        image: '/images/tipp_des_monats.png',
        price: 65,
        countInStock: 1,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
    ],
  };
  export default data;