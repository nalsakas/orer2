'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    static associate(models) {
      this.belongsToMany(models.line, {
        through: models.lineStation
      })
      this.belongsToMany(models.orer, {
        through: models.orerStation
      })
    }
  }
  Station.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      altitude: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'station',
      freezeTableName: true
    }
  )
  return Station
}
