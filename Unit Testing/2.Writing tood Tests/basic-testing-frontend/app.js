import {  getData } from './src/parser.js';
import { generateResults, OutputResults } from './src/output.js';
import { calculateResults } from './src/math.js';

const form = document.querySelector('form');
function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputs= getData(form)
  const results = calculateResults(numberInputs)
  const resultText= generateResults(results)
  OutputResults(resultText)


}

form.addEventListener('submit',formSubmitHandler );
