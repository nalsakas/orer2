'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'orerstation',
      [
        {
          orerId: 1,
          stationId: 14,
          maxSpeed: 70,
          arrival: null,
          departure: new Date(Date.UTC(2000, 0, 1, 0, 20)),
          meets: null,
          overtakes: null,
          km: 67148,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          orerId: 1,
          stationId: 12,
          maxSpeed: 30,
          arrival: new Date(Date.UTC(2000, 0, 1, 0, 27)),
          departure: new Date(Date.UTC(2000, 0, 1, 0, 28)),
          meets: null,
          overtakes: null,
          km: 60244,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          orerId: 1,
          stationId: 11,
          maxSpeed: 30,
          arrival: new Date(Date.UTC(2000, 0, 1, 0, 36)),
          departure: new Date(Date.UTC(2000, 0, 1, 0, 37)),
          meets: null,
          overtakes: null,
          km: 51121,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          orerId: 1,
          stationId: 10,
          maxSpeed: 30,
          arrival: new Date(Date.UTC(2000, 0, 1, 0, 45)),
          departure: new Date(Date.UTC(2000, 0, 1, 1, 5)),
          meets: null,
          overtakes: null,
          km: 43209,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          orerId: 1,
          stationId: 9,
          maxSpeed: 30,
          arrival: null,
          departure: new Date(Date.UTC(2000, 0, 1, 1, 7)),
          meets: null,
          overtakes: null,
          km: 41537,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          orerId: 1,
          stationId: 8,
          maxSpeed: 70,
          arrival: null,
          departure: new Date(Date.UTC(2000, 1, 1, 1, 9)),
          meets: null,
          overtakes: null,
          km: 41516,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          orerId: 1,
          stationId: 7,
          maxSpeed: 70,
          arrival: null,
          departure: new Date(Date.UTC(2000, 0, 1, 1, 26)),
          meets: null,
          overtakes: null,
          km: 26222,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          orerId: 1,
          stationId: 6,
          maxSpeed: 70,
          arrival: null,
          departure: new Date(Date.UTC(2000, 0, 1, 1, 35)),
          meets: null,
          overtakes: null,
          km: 19034,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          orerId: 1,
          stationId: 5,
          maxSpeed: 70,
          arrival: null,
          departure: new Date(Date.UTC(2000, 0, 1, 1, 42)),
          meets: null,
          overtakes: null,
          km: 14113,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          orerId: 1,
          stationId: 4,
          maxSpeed: 70,
          arrival: null,
          departure: new Date(Date.UTC(2000, 0, 1, 2, 11)),
          meets: null,
          overtakes: null,
          km: 8290,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          orerId: 1,
          stationId: 3,
          maxSpeed: 70,
          arrival: null,
          departure: new Date(Date.UTC(2000, 0, 1, 2, 15)),
          meets: null,
          overtakes: null,
          km: 5954,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          orerId: 1,
          stationId: 2,
          maxSpeed: 70,
          arrival: null,
          departure: new Date(Date.UTC(2000, 0, 1, 2, 50)),
          meets: null,
          overtakes: null,
          km: 3500,
          createdAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          ),
          updatedAt: new Date(
            new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
          )
        },
        {
          orerId: 1,
          stationId: 1,
          maxSpeed: 70,
          arrival: new Date(Date.UTC(2000, 0, 1, 2, 50)),
          departure: null,
          meets: null,
          overtakes: null,
          km: 0,
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
    await queryInterface.bulkDelete('orerstation', null, {})
  }
}
