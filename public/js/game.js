
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
(function () {
  'use strict';

  let type = "WebGL";
  if(!PIXI.utils.isWebGLSupported()){
    type = "canvas";
  }

  PIXI.utils.sayHello(type);

  //Create a Pixi Application
  let app = new PIXI.Application({width: 256, height: 256});

  //Add the canvas that Pixi automatically created for you to the HTML document
  document.body.appendChild(app.view);

}());
