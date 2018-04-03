const compileSass = require('broccoli-sass');
const compilePug = require('broccoli-pug');
const funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

const appRoot = 'src';
const sassDir = `${appRoot}/styles`;
const pugDir = `${appRoot}/pug/pages`;

const styles = compileSass([sassDir], 'base.scss', 'main.css');
const html = new compilePug([pugDir], { render: true });
const fonts = funnel(appRoot, {
  files: ['assets/fonts/*.woff'],
  destDir: '/'
});
const images = funnel(`${appRoot}/assets/images`, {
  destDir: '/assets/images/'
});
const scripts = funnel(`${appRoot}/assets/scripts`, {
  destDir: '/assets/scripts/'
});

module.exports = mergeTrees([styles, html, fonts, images, scripts]);
