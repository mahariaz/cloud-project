let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// Count Model
let countSchema = require('../models/Count');


// READ Count
router.route('/').get((req, res) => {
    countSchema.find((error, data) => {
        if (error) {
            // eslint-disable-next-line no-undef
            return next(error);
            //return next1;
            console.log(error)
        } else {
            res.json(data)
        }
    })
})


module.exports = router;