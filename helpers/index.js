module.exports = (req, res, next) => {
    const jwt = require('jsonwebtoken')
    const TOKEN_KEY = 'areallylonggoodkey'
    try {
        const token = req.headers.authorization.split(' ')[1]
        const data = jwt.verify(token, TOKEN_KEY)
      res.locals.user = data
      //next is a placeholder from express to do whats next 
        next()
    } catch (error) {
        console.log(error)
        res.status(403).send('Unauthorized')
    }
}