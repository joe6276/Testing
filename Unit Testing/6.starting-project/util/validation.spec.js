import { describe, expect, it } from "vitest";
import { validateNotEmpty } from "./validation";


describe('Some ValidationNotEmptyTests()', ()=>{
    it('should throw an error if i give an empty string',()=>{
        let text=''
        let errorMessage=''
        
        const validateFN=()=>{
            validateNotEmpty(text,errorMessage)
        }
        expect(validateFN).toThrow()
    })

    it('should not throw an error when a text is given',()=>{
        let text='Sample text'
        let errorMessage=''

        const validateFN=()=>{
            validateNotEmpty(text,errorMessage)
        }
        expect(validateFN).not.toThrow()
    })

    it('Should throw an error of the given error message',()=>{
        let text=''
        let errorMessage='An Error Occured'

        const validateFN=()=>{
            validateNotEmpty(text,errorMessage)
        }
        expect(validateFN).toThrow(errorMessage)
    })
})