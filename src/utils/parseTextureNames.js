const tilePositions = require('./tilePositions');
const fs = require("fs");

const texNames = []

tilePositions.forEach(tile => {
  texNames.push(tile.name);
})

const file = fs.createWriteStream('src/utils/textureNames.js');
file.on('error', err => console.error(err));
file.write('const textureNames = [\r');
texNames.forEach(name => file.write('\t"' + name +'",\r'))
file.write(']\r\r');
file.write('export default textureNames;');
file.end();