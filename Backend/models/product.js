const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter name'],
    trim: true,
    maxlength: [100, 'please name cannot exceed 100 charecters']
  },
  price: {
    type: Number,
    required: [true, 'please enter price'],
    default: 0.0,
    maxlength: [100, 'please name cannot exceed 100 charecters']
  },
  description: {
    type: String,
    required: [true, 'please enter description'],
  },
  ratings: {
    type: Number,
    default: 0
  },
  images: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
      
    }
  ],
  catagory: {
    type: String,
    required: [true, 'please select category for this product'],
    enum: {
      values: [
        'Electronics',
        'Cameras',
        'Laptop',
        'Accessories',
        'Food',
        'Books',
        'clothes/shoes',
        'Beauty/Healts',
        'Sports',
      ],
      message: 'Please select cetagory'
    }
  },
  seller: {
    type: String,
    required: [true, 'please enter product seller']
  },
  stock: {
    type: Number,
    required: [true, 'please enter product seller'],
    maxlength: [5, 'product name cannot exceed 5 charecters'],
    default: 0

  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      name : {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Product', productSchema);