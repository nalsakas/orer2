import api from './api'

export function getLineById(lineId) {
  return api.get(`/line/${lineId}`).then((response) => response.data)
}

export function getLines() {
  return api.get('/line').then((response) => response.data)
}
