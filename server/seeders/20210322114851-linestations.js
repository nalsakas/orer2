'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'linestation',
      [
        {
          lineId: 1,
          stationId: 1,
          km: 0,
          offset: 0,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          lineId: 1,
          stationId: 2,
          km: 3500,
          offset: 0,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          lineId: 1,
          stationId: 3,
          km: 5954,
          offset: 0,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          lineId: 1,
          stationId: 4,
          km: 8294,
          offset: 0,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          lineId: 1,
          stationId: 5,
          km: 14113,
          offset: 0,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          lineId: 1,
          stationId: 6,
          km: 19034,
          offset: 0,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          lineId: 1,
          stationId: 7,
          km: 26222,
          offset: 0,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          lineId: 1,
          stationId: 8,
          km: 41516,
          offset: 0,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          lineId: 1,
          stationId: 9,
          km: 41537,
          offset: 0,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          lineId: 1,
          stationId: 10,
          km: 43209,
          offset: 0,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          lineId: 1,
          stationId: 11,
          km: 51121,
          offset: 0,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          lineId: 1,
          stationId: 12,
          km: 60244,
          offset: 0,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          lineId: 1,
          stationId: 13,
          km: 64313,
          offset: 0,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          lineId: 1,
          stationId: 14,
          km: 67148,
          offset: 0,
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
    await queryInterface.bulkDelete('linestation', null, {})
  }
}
