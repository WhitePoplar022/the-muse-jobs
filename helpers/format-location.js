module.exports = formatLocation

function formatLocation (url, value, callback) {
  var urlLocation = 'location='
  var word
    // Check if in format XXX, YY or XX Metro Area
  if (value.includes(',') === true) {
    value = value.split(/[ ,]+/)
    for (var i = 0; i < value.length; i++) {
        // Capitalize the first word of each word in the query
      word = value[i].charAt(0).toUpperCase()
      value[i] = value[i].replace(value[i].charAt(0), word)
        // Add a Comma if the Country/State is the next word
      if (i === (value.length - 2)) {
        value[i] = value[i] + '%2C'
      } else if (i === (value.length - 1) && value[i].length === 2) {
          // Capitalize the second letter in the State Abbreviation
        word = value[i].charAt(1).toUpperCase()
        value[i] = value[i].replace(value[i].charAt(1), word)
      }
      urlLocation = urlLocation + value[i] + '+'
    }
    urlLocation = urlLocation.substring(0, urlLocation.length - 1)
  } else {
      // In Format of XX Metro Area
    value = value.split(' ')
    for (var j = 0; j < value.length; j++) {
      word = value[j].charAt(0).toUpperCase()
      value[j] = value[j].replace(value[j].charAt(0), word)
      urlLocation = urlLocation + value[j] + '+'
    }
    urlLocation = urlLocation.substring(0, urlLocation.length - 1)
  }
  url = url + '&' + urlLocation
  callback(url)
  return
}