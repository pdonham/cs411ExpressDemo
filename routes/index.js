const express = require('express');
const router = express.Router();
const request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {

    const options = {
      method: 'GET',
        url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        res.render('index', { title: 'BTC Rates', result: JSON.parse(body) });
    });

});
module.exports = router;
