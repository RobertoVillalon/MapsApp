const {writeFileSync, mkdirSync} = require('fs')

require('dotenv').config()

const targetPath = './src/environments/environment.ts'
const targetPathDev = './src/environments/environment.development.ts'

const MAPBOX_KEY = process.env['MAPBOX_KEY']

if(!MAPBOX_KEY) {
    throw new Error('MAPBOX_KEY is not key')
}

const envFileContent = `export const environment = {
    mapboxKey: "${MAPBOX_KEY}"
};
`

mkdirSync('./src/environments', {recursive: true})
writeFileSync(targetPath, envFileContent)
writeFileSync(targetPathDev, envFileContent)
