const models = require('../models')

function getTrainTypes() {
  return models.trainType.findAll()
}

function getTrainTypeById(id) {
  return models.trainType.findOne({
    where: { id: id }
  })
}

module.exports = {
  getTrainTypes,
  getTrainTypeById
}
