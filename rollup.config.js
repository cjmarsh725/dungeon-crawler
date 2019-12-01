// import resolve from 'rollup-plugin-node-resolve';
// import livereload from 'rollup-plugin-livereload';
// import serve from 'rollup-plugin-serve';

export default {
  input: 'src/game.js',
  cache: true,
  output: {
    file: 'public/js/game.js',
    name: 'DungeonCrawler',
    format: 'iife'
  },
  plugins: [
    // resolve(),
    // livereload(),
    // serve()
  ]
};