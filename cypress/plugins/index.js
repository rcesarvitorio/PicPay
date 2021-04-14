module.exports = (on, config) => {
 
  const fs = require('fs-extra')
  const path = require('path')

  function getConfigurationByFile (file) {
    const pathToConfigFile = path.resolve('env', `${file}.json`)

    return fs.readJson(pathToConfigFile)
  }
  const file = config.env.configFile || 'envQA'
  return getConfigurationByFile(file)
}
