
var express = require('express');
var app = express();
const monthString=['January','February','Month','April','May','June','July','August','September','October','November','December']

// enable CORS 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200})); 


app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//timestamp endpoint
app.get('/:timestamp', function (req, res) {
  const timeStamp= req.params.timestamp
  if (isNaN(timeStamp)) {
    const timestring=new Date(timeStamp)
    if (typeof time=='number') {
      res.json({
        unix: timestring/1000,
        utc: monthString[timestring.getMonth()]+' '+times.getDate()+', '+times.getFullYear()
    })
    } else {
      res.json({
        unix: null,
        utc: null
      })
    }
  } else {
    const timstring1 = new Date(timeStamp*1000)
    res.json({
      unix: timeStamp,
      utc: monthString[timstring1.getMonth()]+' '+timstring1.getDate()+', '+timstring1.getFullYear()
    })
  }
})

var listener = app.listen(process.env.PORT || 8080 , function () {
  console.log('Your app is listening on port ' + listener.address().port);
});