import {it,expect,describe} from'vitest'
import {validateNumber,validateStringNotEmpty} from './validation'


describe('Validation string Empty Tests', ()=>{
    it('should throw an Error id a empty string is Provided', ()=>{
        const input=''
        const resulFn=()=>validateStringNotEmpty(input)
        expect(resulFn).toThrow(/must not be empty/)
    })

    it('should throw an Error if a long  empty string is Provided ', ()=>{
        const input='    '
        const resulFn=()=>validateStringNotEmpty(input)
        expect(resulFn).toThrow(/must not be empty/)
    })

    it('should not throw an error, if a non-empty string is provided', () => {
        const input = 'valid';
        const validationFn = () => validateStringNotEmpty(input);
        expect(validationFn).not.toThrow();
      });
})

describe('Should Validate', ()=>{
    it('Throw an Error if a non numeric is provided', ()=>{
        let number ='1'
        const resultFn =()=> validateNumber(number)
        expect(resultFn).toThrow(/Invalid number input/)
    })
    it('should throw an error if NaN is provided', () => {
        const input = NaN;
        const validationFn = () => validateNumber(input);
        expect(validationFn).toThrow();
      });

})