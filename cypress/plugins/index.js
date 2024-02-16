
//Plugins enable us to tap into , modify or extend the internal behavior of cypress



/**
 * @type {Cypress.PluginConfig}
 */
const merge = require('deepmerge');
const fs = require('fs-extra');
const path = require('path');


function getConfigurationByFile(file){
  const pathToConfigFile = path.resolve('./cypress','config',`${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = async (on,config) => {

    const file = config.env.configFile || 'qa' ;
    on('task', {
        
    })
    if(file !== ''){
        return getConfigurationByFile(file)
    }else{
        cy.log('please provide correct configfile names qa , stage or prod')
    }

    const envConfig = await getConfigurationByFile(file);
    const allConfig = merge.all([config, envConfig]);
    
    return allConfig ;
};