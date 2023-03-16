import {generateTokenPromise} from './async-example'
import {describe,it,expect} from 'vitest'



describe('Test Asynchronous Code ', ()=>{
    it('should generate a token', ()=>{
        expect(generateTokenPromise()).resolves.toBeDefined()
    })

    it('should generate a token', async ()=>{
        const token = await generateTokenPromise()
        expect(token).toBeDefined()
    })
})



