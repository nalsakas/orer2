'use strict'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class LineStation extends Model {
    static associate(models) {
      this.belongsTo(models.line, {
        onDelete: 'CASCASE',
        onUpdate: 'CASCADE'
      })

      this.belongsTo(models.station, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  LineStation.init(
    {
      km: DataTypes.DOUBLE,
      offset: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'lineStation',
      freezeTableName: true
    }
  )
  return LineStation
}
