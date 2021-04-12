'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class TrainType extends Model {
    static associate(models) {
      // define association here
    }
  }

  TrainType.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      sequelize,
      modelName: 'trainType',
      freezeTableName: true
    }
  )
  return TrainType
}
