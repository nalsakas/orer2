const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config({ path: path.resolve(__dirname, '../.env') })

const models = require('./models')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const favicon = require('serve-favicon')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.disable('etag')
app.use(favicon(path.resolve(__dirname, '../client/dist', 'favicon.ico')))
app.use(express.static(path.resolve(__dirname, '../client/dist')))

const trainTypeRouter = require('./routes/traintype')
const lineRouter = require('./routes/line')
const stationRouter = require('./routes/station')
const orerRouter = require('./routes/orer')
const lineStationRouter = require('./routes/linestation')
const orerStationRouter = require('./routes/orerstation')

app.use('/api/traintype', trainTypeRouter)
app.use('/api/line', lineRouter)
app.use('/api/station', stationRouter)
app.use('/api/orer', orerRouter)
app.use('/api/linestation', lineStationRouter)
app.use('/api/orerstation', orerStationRouter)

app.use(function (req, res, next) {
  res.status(301).redirect('/')
  next()
})

app.use(function (error, req, res, next) {
  if (error.name == '404') {
    res.status(404).json(error.message)
  } else {
    res.status(500).json(error)
  }
})

models.sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.APP_PORT, () => {
    console.log(`Server started at ${process.env.APP_PORT}`)
  })
})
