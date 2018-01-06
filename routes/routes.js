let express = require('express');
let router = express.Router();
let userCtrl = require('../controllers/main_controller');
const asyncHandler = require('express-async-handler');
let count = require('../helpers');


/* GET users listing. */

router.post('/createUser', (req, res) =>

    userCtrl.create(req, res)
);


router.get('/', (req, res) => {

    count.count()
        .then(data => res.json(data.recipe_data[0].name))
        .catch(err => console.log(err.message))

});


router.get('/find_user', (req, res) =>

    userCtrl.find(req, res)
);


module.exports = router;