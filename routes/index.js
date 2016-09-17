var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var url = './../public' + (req.originalUrl || '/index.html')
	console.log(url)
	request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        } else {
            res.send('404 not found');
        }
    })
});

module.exports = router;
