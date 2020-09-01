const request = require('request')

const forecast = (address, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=ebfa0a8879bbcb524923ffd7efb4d1d6&query=" + address
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to find network')
        }
        else if (body.error) {
            callback('Unable to forecast')
        }
        else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast