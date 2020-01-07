const getSize = function(req, res, next) {
    
    // Regex to extract size
    const regex = /(\d+)x(\d+)/
    // Push items found into array. The size is located in position 1 and 2 of the array
    const array = req._parsedOriginalUrl.href.match(regex)
   
    req.body.width = array[1]
    req.body.height = array[2]       
    next();
}

module.exports = getSize
