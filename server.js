var express = require('express')

var app = express()

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

app.listen('8080')