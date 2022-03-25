const jwt = require('jsonwebtoken');
const simplyRetsClient = require('./clients/simplyRetsClient');
const resolvers = {
  Query: {
    hello: () => 'world',
  },

  Query: {
    Properties: async function(parent, args) {
      try {
        //if(!user) throw new Error('You are not authenticated!');
        const city = args.city? args.city: '';
        const result = await simplyRetsClient.getProperties(city);
        const properties = result.map(prop => { 
          return {
            id: prop.mlsId,
            address: prop.address.full,
            characteristics: {
              roof: prop.property.roof,
              style: prop.property.style,
              area: prop.property.area,
              bathsFull: prop.property.bathsFull,
              fireplaces: prop.property.fireplaces,
              heating: prop.property.heating,
              foundation: prop.property.foundation,
              laundryFeatures: prop.property.laundryFeatures
            },
            photos: prop.photos,
            listPrice: prop.listPrice
          }
        }); 
        return properties; 
      } catch (error) {
        return { error };
      }
    },
  }
};

module.exports = resolvers;