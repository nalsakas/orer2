'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'traintype',
      [
        {
          name: 'Yolcu',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Yük',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('traintype', null, {})
  }
}
