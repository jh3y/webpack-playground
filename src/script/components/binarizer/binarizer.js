/* Import constructor specific styles */
import './binarizer.styl';

/* Import math utility functions */
import { toBinary } from 'modules/convert';

/* The exposed constructor */
export class Binarizer {
  constructor(el) {
    this.element = el;
    this.genDom();
  }
  getResult() {
    const result = toBinary(this.element.querySelector('.binarizer__input').value);
    const resultEl = this.element.querySelector('.binarizer__result');
    resultEl.innerText = result;
  }
  genDom() {
    /* Add className */
    this.element.classList.add('binarizer');

    /* Input for Number input */
    const input = document.createElement('input');
    input.classList.add('binarizer__input');
    input.setAttribute('placeholder', 'Enter number');
    this.element.appendChild(input);

    /* Submit button for outputting Binary result */
    const submit = document.createElement('button');
    submit.innerText = 'Get binary format';
    submit.classList.add('btn', 'binarizer__submit');
    this.element.appendChild(submit);

    /* Add result */
    const result = document.createElement('h1');
    result.classList.add('binarizer__result');
    this.element.appendChild(result);

    /* Bind event listeners */
    submit.addEventListener('click', this.getResult.bind(this));
  }
}
