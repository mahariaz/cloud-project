let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

// Express Route
const courseRoute = require('../backend/routes/course.route')
const assessmentRoute = require('../backend/routes/assessment.route')
const learnerRoute = require('../backend/routes/learner.route')
const countRoute = require('../backend/routes/count.route')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
        console.log('Database successfully connected!')
    },
    error => {
        console.log('Could not connect to database : ' + error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/coursedb', courseRoute)
app.use('/assessmentdb', assessmentRoute)
app.use('/learnerdb', learnerRoute)
app.use('/countdb',countRoute)

// PORT
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// 404 Error
// app.use((req, res, next) => {
//    next(createError(404));
// });

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});