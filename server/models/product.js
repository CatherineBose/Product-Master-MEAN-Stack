var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
        minlength: 4,

    },
    price: {
        type: Number,
        required: [true, 'Price is required.'],
        minlength: 1,

    },
    images: {
        type: String,
        required: [true, 'Image is required.'],
        default: 0,
    },
}, { timestamps: true })

const Product = mongoose.model('Product', ProductSchema);