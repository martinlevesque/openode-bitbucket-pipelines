var express = require('express');
var router = express.Router();
var fs = require('fs');
var os = require('os');

router.get('/', function (req, res) {
	return res.send("Hello bitbucket pipelines! - opeNode");
});



module.exports = router;
