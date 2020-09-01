const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoibmloYXJpa2Fhcm9yYTMwMDEiLCJhIjoiY2tla2JvbDgxMGNrYjM1azdwdmd2bjMwbCJ9.ydNDBSBZ_BS6diCbLPQmkw&limit=1"
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to network!')
        }
        else if (body.features.length === 0) {
            callback('Invalid location, Try again!')
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
                text: body.features[0].text
            })
        }
    })
}

module.exports = geocode