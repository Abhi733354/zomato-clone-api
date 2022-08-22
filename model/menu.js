const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    rest_id: {
        type: String,
        required: true
    },
    food_id: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    food_name: {
        type: String,
        required: true
    },
    food_type: {
        type: String
    },
    food_category: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String

    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('menu', menuSchema);