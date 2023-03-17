import {describe,it,expect, beforeAll,beforeEach,afterAll,afterEach} from 'vitest'
import { HttpError, ValidationError } from './errors';

// let error;
// beforeEach(()=>{
//     error= new HttpError()
// })
// beforeAll(()=>{
//     error=  new HttpError(404,'Error Occured', 'No Data')
// })

// afterAll(()=>{
//     error= new HttpError()
// })

describe('HttpError Class',()=>{
    it('should have a statusCode Property', ()=>{
        const statusCode=404
        const message='Error Occured'
        const data='No Data'
        const error= new HttpError(statusCode,message,data)
        expect(error).toHaveProperty('statusCode')
        expect(error).toHaveProperty('message')
        expect(error).toHaveProperty('data')
    })


    it('should have the following values', ()=>{

        const statusCode=404
        const message='Error Occured'
        const data='No Data'
        const error= new HttpError(statusCode,message,data)

        expect(error.message).toBe('Error Occured')
        expect (error.statusCode).toBe(404)
        expect(error.data).toBe('No Data')
    })
})

describe('ValidationError Class',()=>{
    it('should have Property and value given',()=>{
        const testMessage='test'

        const test = new ValidationError(testMessage)


        expect(test).toHaveProperty('message')
        expect(test.message).toBe('test')
    })
})