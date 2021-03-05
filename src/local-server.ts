const localServer = require('./app')

localServer.listen(3000, () => {
  console.log('Mini Microservice is listening on 3000')
})
