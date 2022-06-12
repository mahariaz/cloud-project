const mongoose = require('mongoose');
const {Link} = require("react-router-dom");
const Schema = mongoose.Schema;

let countSchema = new Schema({
    learnerCount: {
        type: Number
    },
    courseCount: {
        type: Number
    },
    materialCount: {
        type: Number
    },
    assessmentCount: {
        type: Number
    }
}, {
    collection: 'countdb'
})

module.exports = mongoose.model('Count', countSchema)