import http from './http';

async function getRecientes(country) {
  return await http(`top-headlines?country=${country}`)
}

async function getCategoria(category) {
  return await http(`everything?q=${category}`)
}

export default {
  getRecientes,
}