const tilePositions = require('./tilePositions');
const fs = require("fs");

const texNames = {}

tilePositions.forEach(tile => {
  texNames[tile.name] = tile.name;
})

fs.writeFile("src/utils/textureNames.json", JSON.stringify(texNames, null, 2), (err) => {
  if (err) {
      console.error(err);
      return;
  };
  console.log("File has been created");
});