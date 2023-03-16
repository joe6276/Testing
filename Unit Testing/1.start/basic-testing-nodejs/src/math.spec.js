import {it,expect} from 'vitest'
import { add } from './math.js'

it('Should Summarize all numbers', ()=>{
    const numbers =[1,2,3,4,55,66,7]
    const result =add(numbers)
    const expectedResult= numbers.reduce((prev, cur)=>{
            return prev + cur
    },0)
    expect(result).toBe(expectedResult)
})

it('Should yield  Nan if atleast one invalid number is given',()=>{
    const numbers =['invalid', 23,34]
    const results = add(numbers)

    expect(results).toBeNaN()
})

it('Should return 0 if its an empty array', ()=>{
    const numbers=[]
    const results = add(numbers)
    expect(results).toBe(0)
})

it('Should yield Show sum despite passing strings',()=>{
    const numbers =['1','2','3']
    const results = add(numbers)
    const expectedResults= numbers.reduce((prev, cur)=>{
            return +prev + +cur
    },0)
    expect(results).toBe(expectedResults)
})

it('Should throw an Error', ()=>{
    const resultFn=()=>{
        add()
    }
    expect(resultFn).toThrow(/is not iterable/)
})

it('Should throw an Error if provided with multiple arguments',()=>{

    const num1 =2
    const num2=9
    const resultFn=()=>{
        add({number:23},num1,num2)
    }
    expect(resultFn).toThrow(/is not iterable/)
})