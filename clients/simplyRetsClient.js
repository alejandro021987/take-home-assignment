const axios = require('axios');
const { simplyRets } = require('../config/config').config;

const getProperties = async (city='') => {
  result = await axios.get(
    `${simplyRets.BaseUrl}/properties`,
    { 
      params: { city },
      auth: {
        username: simplyRets.Username,
        password: simplyRets.Password
      }
    });
  return result.data;
};

module.exports = {
  getProperties
};
