const express = require('express')
const router = express.Router()
const models = require('../models')
const lineService = require('../service/line')

/*
function use(fn) {
  return async function (req, res, next) {
    try {
      const result = await fn.appy(this)
      res.json(result)
    } catch (error) {
      next(error)
    }
  }
}
*/

router.get('/', async function (req, res, next) {
  try {
    const lines = await lineService.getLines()
    res.json(lines)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async function (req, res, next) {
  try {
    const lineId = req.params.id
    const line = await lineService.getLineById(lineId)
    res.json(line)
  } catch (error) {
    next(error)
  }
})

module.exports = router
