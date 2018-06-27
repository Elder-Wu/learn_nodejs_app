const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    const options = {
        title: "Hello Express!!!"
    }
    res.render('index', options);
});

module.exports = router;
