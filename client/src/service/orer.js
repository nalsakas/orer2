import api from './api'

export function getOrerById(orerId) {
  return api.get(`/orer/${orerId}`).then((response) => response.data)
}

export function getOrers() {
  return api.get('/orer').then((response) => response.data)
}
