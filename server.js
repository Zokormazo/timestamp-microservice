var express = require('express')

var app = express()

app.set('port', (process.env.PORT || 5000));

app.get('/:str', function(req, res) {
    var utc = parseInt(req.params.str)
    var result;
    if (utc)
        utc *= 1000;
    else
        utc = Date.parse(req.params.str)

    if (utc)
        result = {
            unix: Math.floor(utc/1000),
            natural: new Date(utc).toDateString()
        }
    else
        result = {
            unix: null,
            natural: null
        }
    res.send(result)
    res.end()
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});