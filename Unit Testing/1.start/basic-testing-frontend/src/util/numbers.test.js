import {it,expect,describe} from 'vitest'
import {transformToNumber} from './numbers'



describe('Numbers Tests go here',()=>{

    it('Should convert a string to a Number',()=>{
        const number='1'
        const result= transformToNumber(number)
        expect(result).toBeTypeOf('number')
    })

    it('Should convert a string to a Number',()=>{
        const number='1'
        const result= transformToNumber(number)
        expect(result).toBe(1)
    })

    it('Should throw an Error if i pass a string that cant be converted to a number', ()=>{
        const number='INvalid'
        const number2 ={val:2}
        const results=transformToNumber(number)
        const results2=transformToNumber(number2)
        expect(results).toBeNaN()
        expect(results2).toBeNaN()
    })
})
