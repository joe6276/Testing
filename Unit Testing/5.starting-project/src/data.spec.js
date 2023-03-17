import {describe,expect,it,vi,vitest} from 'vitest'
import { generateReportData } from './data'

describe('generateReportFn()', ()=>{
    it('should execute logFn if Provided', ()=>{
        const logger= vi.fn()
       generateReportData(logger) 
       expect(logger).toBeCalledWith('Some dummy data for this demo app')
    })
})