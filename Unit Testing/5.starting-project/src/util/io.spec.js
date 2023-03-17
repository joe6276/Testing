import {it,describe,expect,vi} from 'vitest'
import writeData from './io';
import { promises as fs } from 'fs';
vi.mock('fs')
vi.mock('path',()=>{
    return{
        default:{
            join:(...args)=>{
                return args[args.length-1]
            }
        }
    }
})
describe('TEstion io', ()=>{
    it('should execute writeFile Method', ()=>{
        const testdata= 'Test';
        const testfileName='test.txt';
        writeData(testdata,testfileName)
     
        expect(writeData(testdata,testfileName)).resolves.toBeUndefined()
        // expect(fs.writeFile).toBeCalled()
        // expect(fs.writeFile).toBeCalledWith(testfileName,testdata)
    })
})
