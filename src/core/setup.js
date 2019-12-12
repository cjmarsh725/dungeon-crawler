const setup = app => {
  app.renderer.view.style.position = "absolute";
  app.renderer.view.style.display = "block";
  app.renderer.autoResize = true;
  const resize = () => app.renderer.resize(window.innerWidth, window.innerHeight);
  resize();
  window.addEventListener('resize', resize);
  document.body.appendChild(app.view);

  PIXI.loader
    .add("img/characters/knight.png")
    .load(() => createSprites(app));
}

const createSprites = app => {
  const sprites = {};
  const tex = path => {
    return PIXI.loader.resources[path].texture;
  }

  sprites["knight"] = new PIXI.Sprite(tex("img/characters/knight.png"));

  app.stage.addChild(sprites["knight"]);

  return sprites;
}

export default setup;