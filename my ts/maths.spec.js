import {it,expect,describe} from 'vitest'
import { add } from './math'
describe('Testing Math Function on the JS Side', ()=>{
    
it('should show the sum', ()=>{
    const numbers =[1,2,3,4,5,6]
    const result= add(numbers)
    const expectedResult= numbers.reduce((prev,cur)=>{
        return prev+cur
    },0)
    expect(result).toBe(expectedResult)
})

it('Should Return NAN if atleast one invalid number is given',()=>{
    const numbers= ['invalid', 123]

    const result= add(numbers)

    numbers.reduce((prev,cur)=>{
       return +prev + +cur 
    },0)

    expect(result).toBeNaN()

})
it('should out put the sum when given numbers but with quotes', ()=>{
    const numbers =['1', '2','3', '4']

    const result =add(numbers)
    
    const expectedResult=numbers.reduce((prev,cur)=>{
        return +prev + +cur 
     },0)
     expect(result).toBe(expectedResult)
})

it(' Should output zero if provided with empty Array',()=>{
    const numbers =[]
    
    const result= add(numbers)

     expect(result).toBe(0)
})

it ('Should throw an Error if given not given an Array', ()=>{
    const numbers={value:123}

    const resultFn=()=>{
       add(numbers)
    }
    expect(resultFn).toThrow(/is not iterable/)
})



it('Should throw an Error if no argument is passed', ()=>{
    const resultFn=()=>{
        add()
    }
    expect(resultFn).toThrow()
})

})
