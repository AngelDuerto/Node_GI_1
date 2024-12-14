
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(data.location)
            console.log(forecastData)
        })
    })
}




// const url = 'http://api.weatherstack.com/current?access_key=dd2d78e72228af7fb772c619adc72e22&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
//     }
// })

//Geocoding
// Adress --> Last/Long --> Weather

//V6
// const geocodeURL =  "https://api.mapbox.com/search/geocode/v6/forward?q=Los%20Angeles&access_token=pk.eyJ1IjoiYW5nZWxkdWVydG8iLCJhIjoiY200aDVtbTN6MDBveDJtb2libm94bHV0NiJ9.AInpDMTZNJ9XQjLFMbAgSw&limit=1"

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const latitude = response.body.features[0].properties.coordinates.longitude
//         const longitude = response.body.features[0].properties.coordinates.latitude
//         console.log(latitude, longitude)
//     }
// })

//V5