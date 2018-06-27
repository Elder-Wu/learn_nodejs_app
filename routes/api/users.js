const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    const name = req.query.name || "张三"
    const age = req.query.age || 21;
    const options = {
        title: name + " " + age,
    }
    res.render("index", options)
});

module.exports = router;
