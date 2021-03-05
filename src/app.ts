import compression from 'compression'
import cors from 'cors'
import express from 'express'
import asyncHandler from 'express-async-handler'
import morgan from 'morgan'
import uuid from 'uuid'

const app = express()
app.use(cors())
app.use(compression())
app.use(express.urlencoded({limit: '6mb', extended: true}))
app.use(express.json({limit: '6mb'}))
app.use(morgan('tiny'))

app.get('/ping', (req, res) => {
  res.json({
    pong: 'OK',
  })
})

app.get('/:id', asyncHandler(async (req, res) => {
  const id = req.params['id']
  const result = {
    requested: id,
  }
  // const result = await service.get(id)
  res.json(result)
}))

app.post('/', asyncHandler(async (req, res) => {
  const id = uuid.v4() // This could of course be returned by the service
  // const data = req.body
  // await service.save(id, data)
  res.json({
    id: id,
  })
}))

app.patch('/:id', asyncHandler(async (req, res) => {
  const id = req.params['id']

  // const original = await service.get(id)
  // const data = req.body
  // const updated = merge(original, data)
  // await service.save(id, updated)

  res.json({
    updated: id,
  })
}))

app.put('/:id', asyncHandler(async (req, res) => {
  const id = req.params['id']

  // const data = req.body
  // await service.save(id, updated)

  res.json({
    updated: id,
  })
}))

app.delete('/:id', asyncHandler(async (req, res): Promise<void> => {
  const id = req.params['id']

  // await service.delete(id)

  res.json({
    deleted: id,
  })
}))

module.exports = app
