'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'orer',
      [
        {
          name: '63021',
          version: 1,
          validFrom: new Date('2021-01-01Z'),
          validTo: new Date('2021-12-31Z'),
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
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
