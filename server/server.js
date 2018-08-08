// const yargs = require('yargs');
const axios = require('axios');
const express = require('express');
var cors = require('cors')
var app = express();
app.use(cors());
app.get('/weather/:address', (req, res) => {
    // res.send("address is: "+req.params.address);
    var encodedAddress = encodeURIComponent(req.params.address);
    var geocodeUrl=`http://www.mapquestapi.com/geocoding/v1/address?key=1w2LDcPaA9xB7wd8W3cgG80cLAqhNHFY&location=${encodedAddress}`;
    //var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyD0xWHeZIzQnw4BQwrXBn6tDwdxVmtLD-8`;

    axios.get(geocodeUrl).then((response) => {
      if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
      }else if(response.data.status === 'OVER_QUERY_LIMIT'){
        throw new Error('You have exceeded your daily request quota for this API.');
      }
      // var lat = res.data.results[0].geometry.location.lat;
      // var lng = res.data.results[0].geometry.location.lng;
      var lat=response.data.results[0].locations[0].latLng.lat;
      var lng=response.data.results[0].locations[0].latLng.lng;
      var weatherUrl = `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`;
     // console.log(response.data.results[0].locations[0].street);
      axios.get(weatherUrl).then((response) => {
        if(response.data.Error==='Invalid API key!'){
          throw new Error('Wrong API Key');
        }else if(response.data.Error==='Something went wrong.'){
          throw new Error('Something went wrong.');
        }
        results={
          timezone:response.data.timezone,
          temperature: response.data.currently.temperature,
          apparentTemperature:response.data.currently.apparentTemperature,
          pressure:response.data.currently.pressure,
          windSpeed:response.data.currently.windSpeed,
          cloudCover:response.data.currently.cloudCover
        }
        res.send(results);
        console.log(results);
    }).catch((e) => {
      if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers.');
      } else {
        console.log(e.message);
      }
    });
  });
});

app.get('/movie/:movieName',(req,res)=>{
  var movieName=encodeURIComponent(req.params.movieName);
  var movieUrl=`http://www.omdbapi.com/?t=${movieName}&apikey=d2fd42b2`;
  axios.get(movieUrl).then((response)=>{
    results={
      title:response.data.Title,
      year:response.data.Year,
      reted:response.data.Rated,
      released:response.data.Released,
      genre:response.data.Genre,
      director:response.data.Director,
      actors:response.data.Actors,
      awards:response.data.Awards,
      poster:response.data.Poster,
      boxOffice:response.data.BoxOffice,
      ratings:[
        {
          source:response.data.Ratings[0].Source,
          value:response.data.Ratings[0].Value,
        },
        {
          source:response.data.Ratings[1].Source,
          value:response.data.Ratings[1].Value,
        }
      ]
    }
    res.send(results);
  })
});

app.get('/currency/:curr',(req,res)=>{
    var encodedCurrrency=encodeURIComponent(req.params.curr);
    var currencyUrl=`https://exchangeratesapi.io/api/latest?base=${encodedCurrrency}`;
    axios.get(currencyUrl).then((response)=>{
      console.log(response);
      results={
        usd:response.data.rates.USD,
        cad:response.data.rates.CAD,
        inr:response.data.rates.INR,
        jpy:response.data.rates.JPY,
        brl:response.data.rates.BRL,
        php:response.data.rates.PHP,
      }
      res.send(results);
    });
});
  app.listen(3000, () => {
    console.log('Server is up on port 3000');
  });
