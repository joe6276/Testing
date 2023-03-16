import {it,expect,describe} from'vitest'
import {cleanNumbers, validateNumber,validateStringNotEmpty} from './validation'


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

describe('Clean Number() tests', ()=>{
    it('should always give an array of numbers if an array of string is given', ()=>{
        let numbers =['1','2','3','4']
        const cleanedNumbers= cleanNumbers(numbers)
        expect(cleanedNumbers).toEqual([1,2,3,4])
    })

    it('should throw an error if an invaligd argument is given',()=>{
        const numbers=['', 1,  ]
        const numbers1=[false,true]

        const cleanedNumberFn= ()=>cleanNumbers(numbers)
        const cleanedNumberFn1= ()=>cleanNumbers(numbers1)

        expect(cleanedNumberFn).toThrow()
        expect(cleanedNumberFn1).toThrow()
    })
})