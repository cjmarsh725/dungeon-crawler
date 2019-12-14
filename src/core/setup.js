const setup = app => {
  app.renderer.view.style.position = "absolute";
  app.renderer.view.style.display = "block";
  app.renderer.autoResize = true;
  const resize = () => app.renderer.resize(window.innerWidth, window.innerHeight);
  resize();
  window.addEventListener('resize', resize);
  document.body.appendChild(app.view);

  PIXI.loader
    .add([
      "img/characters/knight.png",
      "img/characters/mage.png",
      "img/characters/priest.png",
      "img/characters/thief.png"
      ])
    .add("json/sprites.json")
    .load(() => createSprites(app));
}

const createSprites = app => {
  const sprites = {};
  const tex = path => {
    return PIXI.loader.resources[path].texture;
  }

  sprites["knight"] = new PIXI.Sprite(tex("img/characters/knight.png"));
  sprites["mage"] = new PIXI.Sprite(tex("img/characters/mage.png"));
  sprites["priest"] = new PIXI.Sprite(tex("img/characters/priest.png"));
  sprites["thief"] = new PIXI.Sprite(tex("img/characters/thief.png"));

  sprites["mage"].x = 50;
  sprites["priest"].x = 100;
  sprites["thief"].x = 150;

  app.stage.addChild(sprites["knight"]);
  app.stage.addChild(sprites["mage"]);
  app.stage.addChild(sprites["priest"]);
  app.stage.addChild(sprites["thief"]);

  // const makeSprite = name => {
  //   sprites[name] = new PIXI.Sprite(PIXI.loader.resources["json/sprites.json"].textures[name]);
  // }

  // makeSprite("bat");
  // makeSprite("demon");

  // app.stage.addChild(sprites["demon"]);

  return sprites;
}

export default setup;