
const express = require('express');
const app = express();
const moment = require('moment')
const monthString=['January','February','Month','April','May','June','July','August','September','October','November','December']
const dayString =['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
// enable CORS 
const cors = require('cors');
app.use(cors({optionSuccessStatus: 200})); 

const localDate = moment().format()

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//timestamp endpoint
app.get('/:timestamp', function (req, res) {
  const timeStamp= req.params.timestamp
  if (isNaN(timeStamp)) {
    const timestring=new Date(timeStamp)
    console.log(timestring.getTime()/1000)
    const unixtt =  timestring.getTime()/1000;
    unixtimeConvert
    res.json({
      unix:unixtt,
      utc: moment(timestring).format("YYYY-MM-DD")
  })
  } 
  // when the input is unix 
  else {
  //coverting unix to day, month year .....
    const unixtime = new Date(timeStamp*1000)
    unixtimeConvert(unixtime)
    res.json({
      unix: timeStamp,
      utc: this.utc
    })
  }
})

var listener = app.listen(process.env.PORT || 8080 , function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

function  unixtimeConvert ( time) {
  const date = time.getDate();
  const month = monthString[time.getMonth()];
  const year = time.getFullYear();
  const day = dayString[time.getDay()];
  const hours = time.getHours();
  const minutes =  time.getMinutes();
  const seconds =  time.getSeconds();

  utc=  day+',' + ' ' + date+' '+ month+' ' + year +' ' + hours+':'+minutes+':'+seconds+' GMT' 
  return utc;
}