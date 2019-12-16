const tilePositions = require('./tilePositions');
const fs = require("fs");

// {
//   "frames": {
//     "d1_wall_solid": {
//       "frame": {"x":0,"y":0,"w":32,"h":32},
//       "rotated": false,
//       "trimmed": false,
//       "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
//       "sourceSize": {"w":32,"h":32}
//     },
//     "d1_wall_ew_1": {
//       "frame": {"x":32,"y":0,"w":32,"h":32},
//       "rotated": false,
//       "trimmed": false,
//       "spriteSourceSize": {"x":0,"y":0,"w":32,"h":32},
//       "sourceSize": {"w":32,"h":32}
//     }
//   },
//   "meta": {
//     "image": "../img/sprites.png",
//     "format": "RGBA8888",
//     "size": {"w":480,"h":384},
//     "scale": 1
//   }
// }

const spritesheet = {}
spritesheet.frames = {}
spritesheet.meta = {
  image: "../img/sprites.png",
  format: "RGBA8888",
  size: {w:480,h:384},
  scale: 1
}

tilePositions.forEach(tile => {
  spritesheet.frames[tile.name] = {
    frame: {x:tile.x,y:tile.y,w:32,h:32},
    rotated: false,
    trimmed: false,
    spriteSourceSize: {x:0,y:0,w:32,h:32},
    sourceSize: {w:32,h:32}
  }
})

fs.writeFile("src/utils/sprites.json", JSON.stringify(spritesheet, null, 2), (err) => {
  if (err) {
      console.error(err);
      return;
  };
  console.log("File has been created");
});