const { createElement } = require('react')
const express = require('express')
const { renderToString } = require('react-dom/server')
const { Spinner } = require('react-spinners')

const port = 3000
const app = express()

app.get('*', (req, res) => {
  const el = createElement(Spinner)
  const html = renderToString(el)

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${html}
    </body>
    </html>
  `)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
