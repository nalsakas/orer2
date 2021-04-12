const models = require('../models')

function getLines() {
  return models.line.findAll({
    include: [{ model: models.lineStation, include: { model: models.station } }]
  })
}

function getLineById(lineId) {
  return models.line.findOne({
    where: { id: lineId },
    include: [{ model: models.lineStation, include: { model: models.station } }]
  })
}

module.exports = {
  getLines,
  getLineById
}
