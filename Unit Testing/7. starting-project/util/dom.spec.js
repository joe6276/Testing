import {vi,describe,it,expect, afterEach, beforeEach} from 'vitest'

import path from 'path'
import fs from 'fs'

import {Window} from 'happy-dom'

import {showError} from './dom'


const htmlDocPath= path.join(process.cwd(), 'index.html');
const htmlDocumentContent= fs.readFileSync(htmlDocPath).toString();
const window= new Window()
const document= window.document
document.write(htmlDocumentContent);
vi.stubGlobal('document', document)
beforeEach(()=>{
    document.body.innerHTML=''
    document.write(htmlDocumentContent);
})
describe('Testing DOM', ()=>{
    it('first test', ()=>{
        showError('test')

        const errorEl= document.getElementById('errors')
        const errorParagraph = errorEl.firstElementChild;
        expect(errorParagraph).not .toBeNull()

    })

    it('should not contain error immadiately', ()=>{
        const errorEl= document.getElementById('errors')
        const errorParagraph = errorEl.firstElementChild;
        expect(errorParagraph).toBeNull()
    } )

    it('should have the textContent',()=>{
        const errorMessage='test'
        const errorEl= document.getElementById('errors')
        const errorParagraph = errorEl.firstElementChild;
        expect(errorParagraph.textContent).toBe(errorMessage)
    })
})