# Readme

This is just an extremely basic example of how you can create a mini microservice using express that can then be
deployed into AWS.

This can then be wired up to an AWS Api Gateway in Lambda Proxy mode.

This is using https://github.com/dougmoscrop/serverless-http to provide the translation between lambda and express.

You can also run it locally (since this isn't actually using anything in AWS, e.g. S3) using npm start

Once running locally - you can test it out using your favourite rest client, or the command line

curl --location --request GET 'http://localhost:3000/ping'
