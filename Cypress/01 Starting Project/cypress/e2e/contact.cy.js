/// <reference types="Cypress"/>

// npx cypress run --browser firefox --- setting  browser for a test
describe('Contact Form', {defaultCommandTimeout:4000, browser:'chrome'}, ()=>{

    before(()=>{
        // Runs only once , before all test
    })
    beforeEach(()=>{
        // Runs before every test(i.e., it's repeated )
        cy.visit('/about')
    })

    after(()=>{
        // Runs afer alll tests
        // for clean ups -but this is not recommended u should use beforeEach for clean ups

    })

    afterEach(()=>{
        // Runs after every test
    })
    it('should submit the form', ()=>{
       
        cy.getById('contact-input-message').type('Hello World')
        cy.getById('contact-input-name').type('Jonathan Ndambuki')
       
        cy.get('[data-cy="contact-btn-submit"]').then((el)=>{
            expect(el.attr('disabled')).to.be.undefined;
            expect(el.text()).to.eq('Send Message');
        })

        cy.get('[data-cy="contact-input-email"]').type('joendambuki16@gmail.com')

        cy.submitForm()
        // cy.get('[data-cy="contact-input-email"]').type('joendambuki16@gmail.com{enter}')
        // cy.get('[data-cy="contact-btn-submit"]').contains('Send Message')
        // cy.get('[data-cy="contact-btn-submit"]').should('not.have.attr', 'disabled')
        // cy.get('[data-cy="contact-btn-submit"]').click()
        cy.get('[data-cy="contact-btn-submit"]').as('submitBtn')
        cy.get('@submitBtn').should('have.attr', 'disabled')
        cy.get('@submitBtn').contains('Sending...')
})

it('has invalid styling',()=>{
   
    cy.get('[data-cy="contact-input-message"]').as('InvalidMessage')
    cy.get('[data-cy="contact-input-name"]').as('InvalidName')
    cy.get('[data-cy="contact-input-email"]').as('InvalidEmail')
    cy.get('@InvalidMessage').focus().blur().parent()
    .should('have.attr', 'class').and('match', /invalid/)
    
    
    // then((el)=>{
    //     expect(el.attr('class')).to.contains('invalid')
    // })
    
    cy.get('@InvalidName').focus().blur().parent()
    .should('have.attr', 'class').and('match', /invalid/)
    // then((el)=>{
    //     expect(el.attr('class')).to.contains('invalid')
    // })

    cy.get('@InvalidEmail').focus().blur().parent().
    // .should('have.attr', 'class').and('match', /invalid/)
    should((el)=>{
        expect(el.attr('class')).to.contains('invalid')
    })
   
})

})