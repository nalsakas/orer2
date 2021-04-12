'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'orer',
      [
        {
          name: '63021',
          version: 1,
          validFrom: new Date(2021, 0, 1),
          validTo: new Date(2021, 11, 31),
          createdAt: new Date(),
          updatedAt: new Date(),
          trainTypeId: null
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orer', null, {})
  }
}
