import resolve from 'rollup-plugin-node-resolve';
import liveServer from 'rollup-plugin-live-server';

export default {
  input: 'src/core/game.js',
  cache: true,
  output: {
    file: 'public/js/game.js',
    name: 'DungeonCrawler',
    format: 'iife'
  },
  plugins: [
    resolve(),
    liveServer({
      port: 8001,
      host: "0.0.0.0",
      root: "./public",
      open: true,
      wait: 200,
      logLevel: 2
    })
  ]
};