'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'station',
      [
        {
          name: 'Mersin',
          altitude: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Km.3+500',
          altitude: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tırmıl',
          altitude: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Karacailyas',
          altitude: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Taşkent',
          altitude: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Huzurkent',
          altitude: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tarsus',
          altitude: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Km.41+516',
          altitude: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Yenice Müselles',
          altitude: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Yenice',
          altitude: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Zeytinli',
          altitude: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Şehitlik',
          altitude: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Şakirpaşa',
          altitude: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Adana',
          altitude: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('station', null, {})
  }
}
