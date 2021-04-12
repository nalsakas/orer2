import api from './api'

export function getLineStationById(lineId, stationId) {
  return api
    .get(`/line/${lineId}/${stationId}`)
    .then((response) => response.data)
}

export function getLines() {
  return api.get('/line').then((response) => response.data)
}
