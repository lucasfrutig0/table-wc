interface RequestOptions {
  method: string
  headers: Headers
  redirect: RequestRedirect | undefined
}

const myHeaders = new Headers()
myHeaders.append('x-rapidapi-key', import.meta.env.VITE_FOOT_API_KEY)
myHeaders.append('x-rapidapi-host', 'v3.football.api-sports.io')

const requestOptions: RequestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
}

async function fetchAPI<TResponse>(endpoint = ''): Promise<TResponse> {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${endpoint}`, requestOptions)
    const result_1 = await response.json()
    return result_1
  } catch (error) {
    console.error('error', error)
    return error as TResponse
  }
}

export { fetchAPI }
