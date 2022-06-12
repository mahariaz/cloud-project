const mongoose = require('mongoose');
const {Link} = require("react-router-dom");
const Schema = mongoose.Schema;

let courseSchema = new Schema({
    courseName: {
        type: String
    },
    pic: {
        type: String
    },
    overview: {
        type: String
    },
    link: {
        type: String
    },
    sdate: {
        type: String
    },
    edate: {
        type: String
    }
}, {
    collection: 'coursedb'
})

module.exports = mongoose.model('Course', courseSchema)