import '../style/style.styl';

import { Binarizer } from './components/binarizer/binarizer';

const el = document.querySelector('.my-element');
const myBinarizer = new Binarizer(el);
