const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    const name = req.query.name || "张三"
    const age = req.query.age || 21;
    const options = {
        title: name + " " + age,
    }
    res.send({name: name, age: age, sex: "男"})
});

module.exports = router;
