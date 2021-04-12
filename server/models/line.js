'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Line extends Model {
    static associate(models) {
      /*
      this.belongsToMany(models.station, {
        through: models.lineStation
      })
      */
      this.hasMany(models.lineStation, {})
    }
  }

  Line.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'line',
      freezeTableName: true
    }
  )
  return Line
}
