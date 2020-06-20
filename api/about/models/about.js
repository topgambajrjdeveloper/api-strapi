'use strict';
const axios = require('axios');
const request = require("request");
/**
 * Lifecycle callbacks for the `about` model.
 */

module.exports = {

  afterCreate: async entry => {
    axios
    .post(strapi.config.currentEnviroment.staticWebsiteBuildUrl, entry)
    .catch(()=>{

    });
  },


  afterUpdate: async entry => {
    axios
    .post(strapi.config.currentEnviroment.staticWebsiteBuildUrl, entry)
    .catch(()=>{

    });
  },

  
  afterDestroy: async entry => {
    axios
    .post(strapi.config.currentEnviroment.staticWebsiteBuildUrl, entry)
    .catch(()=>{

    });
  },
};
