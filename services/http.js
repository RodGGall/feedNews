export default async function httpGet(endpoint) {
  const key = '6b019a9bf61d4babba87841f9983e861'
  const url = `https://newsapi.org/v2/${endpoint}&apiKey=${key}`
  
  let response = await fetch(url, {
    method: 'GET',
  })
  return response.json()
}