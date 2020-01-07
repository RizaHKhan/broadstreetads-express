const express = require('express')
const config = require('./config')
const size = require('./size')
const app = express()

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// EJS template
app.set('view engine', 'ejs')

// Requring the assets
app.use(express.static('assets'))

app.use(size)

app.get('/:size', (req, res) => {
    res.render('index', {width: req.body.width, height: req.body.height, config})
})

let port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
