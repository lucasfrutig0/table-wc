import { Button } from '@chakra-ui/react'
import { useState } from 'react'
// import { Outlet, Link } from 'react-router-dom'

import { fetchAPI } from '@/services/fetchAPI'

export default function Root() {
  const [data, setData] = useState<unknown>()
  async function handleClick() {
    const result = await fetchAPI('status')
    console.log(result)
    setData(result)
  }
  return (
    <>
      <h1>List Players</h1>
      {JSON.stringify(data)}
      <Button colorScheme='blue' onClick={handleClick}>
        Call API
      </Button>
    </>
  )
}
