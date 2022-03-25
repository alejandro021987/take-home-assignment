require('dotenv').config();
const config = {
  simplyRets: {
    BaseUrl: 'https://api.simplyrets.com',
    Username: process.env.SIMPLYRETS_USER, 
    Password: process.env.SIMPLYRETS_PASSWORD
  } 
};
module.exports= {
  config
};
