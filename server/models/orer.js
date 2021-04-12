'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Orer extends Model {
    static associate(models) {
      this.belongsTo(models.trainType, {
        onDelete: 'SET NULL'
      })

      /*
      this.belongsToMany(models.station, {
        through: models.orerStation
      })
      */

      this.hasMany(models.orerStation, {})
    }
  }

  Orer.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      version: {
        type: DataTypes.INTEGER
      },
      validFrom: DataTypes.DATE,
      validTo: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'orer',
      freezeTableName: true
    }
  )

  return Orer
}
