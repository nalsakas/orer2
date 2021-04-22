'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'traintype',
      [
        {
          name: 'Yolcu',
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          name: 'Yük',
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('traintype', null, {})
  }
}
