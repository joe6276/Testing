import { cleanNumbers } from "./util/validation.js";

export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}


export const calculateResults=(numbersInputs)=>{
  let result
  try {
    const numbers =cleanNumbers(numbersInputs)
    result = add(numbers).toString();
    
  } catch (error) {
    result = error.message;
  }
  return result
}