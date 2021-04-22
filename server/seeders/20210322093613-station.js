'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'station',
      [
        {
          name: 'Mersin',
          altitude: 0,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          name: 'Km.3+500',
          altitude: 3,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          name: 'Tırmıl',
          altitude: 3,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          name: 'Karacailyas',
          altitude: 4,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          name: 'Taşkent',
          altitude: 4,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          name: 'Huzurkent',
          altitude: 5,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          name: 'Tarsus',
          altitude: 2,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          name: 'Km.41+516',
          altitude: 3,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          name: 'Yenice Müselles',
          altitude: 2,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          name: 'Yenice',
          altitude: 6,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          name: 'Zeytinli',
          altitude: 2,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          name: 'Şehitlik',
          altitude: 3,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          name: 'Şakirpaşa',
          altitude: 4,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          name: 'Adana',
          altitude: 6,
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
    await queryInterface.bulkDelete('station', null, {})
  }
}
