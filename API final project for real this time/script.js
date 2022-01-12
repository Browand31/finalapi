fetch ("http://api.weatherapi.com/v1/current.json", key = '13c982c208974f5d847163133221201' , q = 'Salt Lake City')
.then(response => response.json())
  .then(data => console.log(data));

 var array = {
    "location": {
        "name": "Salt Lake City",
        "region": "Utah",
        "country": "United States of America",
        "lat": 40.76,
        "lon": -111.89,
        "tz_id": "America/Denver",
        "localtime_epoch": 1642006518,
        "localtime": "2022-01-12 9:55"
    },
    "current": {
        "last_updated_epoch": 1642005900,
        "last_updated": "2022-01-12 09:45",
        "temp_c": -1.1,
        "temp_f": 30.0,
        "is_day": 1,
        "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "code": 1003
        },
        "wind_mph": 6.9,
        "wind_kph": 11.2,
        "wind_degree": 140,
        "wind_dir": "SE",
        "pressure_mb": 1034.0,
        "pressure_in": 30.54,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 71,
        "cloud": 75,
        "feelslike_c": -2.5,
        "feelslike_f": 27.5,
        "vis_km": 13.0,
        "vis_miles": 8.0,
        "uv": 2.0,
        "gust_mph": 5.6,
        "gust_kph": 9.0
    }
}