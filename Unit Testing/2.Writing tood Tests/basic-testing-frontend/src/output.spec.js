import{ describe ,it, expect} from 'vitest'

import { generateResults } from './output'
describe('GenerateResultFn()', ()=>{
    it('Should always return a string',()=>{
        const value=1;
        const value1='1'
        const value2=false;

        const result= generateResults(value)
        const result1= generateResults(value1)
        const result2= generateResults(value2)

        expect(result).toBeTypeOf('string')
        expect(result1).toBeTypeOf('string')
        expect(result2).toBeTypeOf('string')
    })
    it('if provide with the right value it should return a string', ()=>{
        let number =5;

        const resultText= generateResults(number)

        expect(resultText).toContain(number.toString())
    }),
    it('Should return a string with invalid if invalid is given',()=>{
        const result= 'invalid'

        const resultText= generateResults(result)

        expect(resultText).toContain('Invalid')
    })
    it('should return an empty string if "no-calc" is provided as a result', () => {
        const result = 'no-calc';
    
        const resultText = generateResults(result);
    
        expect(resultText).toBe('');
      })
})