import {APIGatewayProxyEvent, Context} from 'aws-lambda'

const serverless = require('serverless-http')
const server = require('./app')

export const apiHandler = serverless(server, {
  basePath: '/myService/',
})

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<any> => {
  return await apiHandler(event, context)
}

module.exports.server = async (event: APIGatewayProxyEvent, context: any) => {
  return await handler(event, context)
}
