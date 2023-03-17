import {vi,expect,it,describe} from 'vitest'
import { HttpError } from './errors';
import { sendDataRequest } from './http';


const testResponseData={testKey:'Some Data'};


const testFetch = vi.fn((url,options)=>{
    return new Promise((resolve,reject)=>{

        if( typeof options.body !=='string'){
            return reject('Not a string');
        }
        const testResponse={
            ok:true,
            json(){
                return new Promise((resolve,reject)=>{
                    resolve(testResponseData)
                })
            }
        }

        resolve(testResponse)
    })
})

vi.stubGlobal('fetch', testFetch)


describe('Some Fetch Tests', ()=>{
    it('Should Resolve', ()=>{
        const testData={key:'test'}
        return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData)
    })

    it('Should Not Resolve', async ()=>{
        const testData={key:'test'}
        let errorMessage;
       try {
        await sendDataRequest(testData)
       } catch (error) {
         errorMessage=error
       }

       expect(errorMessage).not.toBe('Not a string ')
    })
    
    it('Should Reject if an error Happens', ()=>{
        testFetch.mockImplementationOnce((url,options)=>{
            return new Promise((resolve,reject)=>{
                const testResponse={
                    ok:false,
                    json(){
                        return new Promise((resolve,reject)=>{
                            resolve(testResponseData)
                        })
                    }
                }
                resolve(testResponse)
            })
        })
        const testData={key:'test'}
        return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError)
    })
})