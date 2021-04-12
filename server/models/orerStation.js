'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class OrerStation extends Model {
    static associate(models) {
      this.belongsTo(models.orer, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })

      this.belongsTo(models.station, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })

      this.belongsTo(models.orer, {
        foreignKey: 'meets',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })

      this.belongsTo(models.orer, {
        foreignKey: 'overtakes',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    }
  }

  OrerStation.init(
    {
      maxSpeed: DataTypes.INTEGER,
      departure: DataTypes.DATE,
      arrival: DataTypes.DATE,
      km: DataTypes.DOUBLE
    },
    {
      sequelize,
      modelName: 'orerStation',
      freezeTableName: true
    }
  )

  return OrerStation
}
