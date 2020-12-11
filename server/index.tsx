import express, { Request, Response } from 'express'
import next from 'next'
import { parse } from 'url'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3001

;(async () => {
  try {
    await app.prepare()
    const server = express()

    server.all('*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      // console.log(req.url)
      // const { pathname, query } = parsedUrl
      // if (pathname === '/a') {
      //   app.render(req, res, '/about', query)
      // } else if (pathname === '/b') {
      //   app.render(req, res, '/users', query)
      // } else {
      //   handle(req, res, parsedUrl)
      // }
      handle(req, res, parsedUrl)
    })
    server.listen(port, (err?: any) => {
      if (err) throw err
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`)
    })
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()
