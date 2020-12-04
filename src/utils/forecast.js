const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=188ced6669489eee2874ce72ea39662a&query=' + latitude + "," + longitude
    request({url, json: true}, (error, { body }) => {
        if(error){
            callback("Unable to connect to weather service!", undefined)
        } else if (body.error){
            callback(body.error, undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees outside.")
        }
    })
}

module.exports = forecast