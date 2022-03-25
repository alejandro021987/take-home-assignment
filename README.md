# Take home assignment
## To run the application run
yarn install && yarn start

Listening on http://localhost:4000/graphql

## To solve the problem perform the following steps

- Tested the endpoint https://api.simplyrets.com/properties
- Create the endpoint in postman for new graphql query
- I added the resolver in resolvers.js but for later you could separate the resolvers into a resolvers folder and add them from index.js
- I created a client to hit the simplyRets endpoint
- In the resolver ->Query -> Properties(), I put together a demo of the response with the fields that I chose to show, I considered it important to filter all the fields that I do not need and leave only the ones that I chose and defined in the graphql response.
- I also added a .env file where the credentials are saved and a config file where the credentials are raised.
- I did not arrive with time to finish making the authentication work but basically I was going to make an endpoint to create the token with the sideinc username and password and then use it as a token for the Properties query
