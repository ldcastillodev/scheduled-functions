
import { schedule } from '@netlify/functions'

export const handler = schedule('@daily', async () => {
  console.log("ajaaaa")
  return {
    statusCode: 200,
    body: 'hello from netlify'
  }
})

