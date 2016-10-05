import 'style.styl';
import 'lodash';
const el = document.querySelector('.my-element');

console.info('loading...');
document.body.className = 'loading';

require.ensure(['components/binarizer/binarizer'], (require) => {
  const Binarizer = require('components/binarizer/binarizer');
  console.info('loaded', Binarizer.Binarizer);
  const myBinarizer = new Binarizer.Binarizer(el);
  document.body.className = '';
});
// import { Binarizer } from 'components/binarizer/binarizer';
// const myBinarizer = new Binarizer(el);
