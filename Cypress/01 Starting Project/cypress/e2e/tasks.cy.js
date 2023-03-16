/// <reference types="Cypress"/>

describe('Tasks Management',()=>{

    it('Should open and Close Modal', ()=>{
        cy.visit('http://localhost:5174')
        cy.contains('Add Task').click()
        cy.get('.backdrop').click({force:true})
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
        cy.contains('Add Task').click()
        cy.contains('Cancel').click()
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
    })

    it('should add a New Task and Close the Modal', ()=>{
        cy.visit('http://localhost:5174')
        cy.contains('Add Task').click()
        cy.get('#title').type('Jonathan First test')
        cy.get('#summary').type('A summary of the Test')
        cy.get('.actions button').contains('Add Task').click()
        cy.get('.backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
        cy.get('li div  h2').contains('Jonathan First test')
        cy.get('li div p').contains('A summary of the Test')
    })

    it('Should validate inputs', ()=>{
        cy.visit('http://localhost:5174')
        cy.contains('Add Task').click()
        cy.get('.actions button').contains('Add Task').click()
        cy.get('.modal p'). contains('Please provide values')
    })

    it('Should add multiple inputs', ()=>{
        cy.visit('http://localhost:5174')
        cy.contains('Add Task').click()
        cy.get('#title').type('Jonathan First test')
        cy.get('#summary').type('A summary of the First Test')
        cy.get('#category').select('urgent')
        cy.get('.actions button').contains('Add Task').click()
        cy.get('.task').should('have.length',1)
        cy.contains('Add Task').click()
        cy.get('#title').type('Jonathan Second test')
        cy.get('#summary').type('A summary of the Second Test')
        cy.get('#category').select('moderate')
        cy.get('.actions button').contains('Add Task').click()
        cy.get('.task').should('have.length',2)

        cy.get('.task').eq(0).contains('First')
        cy.get('.task').eq(1).contains('Second')
    })


    it('Should add multiple inputs and Filter', ()=>{
        cy.visit('http://localhost:5174')
        cy.contains('Add Task').click()
        cy.get('#title').type('Jonathan First test')
        cy.get('#summary').type('A summary of the First Test')
        cy.get('#category').select('urgent')
        cy.get('.actions button').contains('Add Task').click()
        cy.get('.task').should('have.length',1)
        cy.contains('Add Task').click()
        cy.get('#title').type('Jonathan Second test')
        cy.get('#summary').type('A summary of the Second Test')
        cy.get('#category').select('moderate')
        cy.get('.actions button').contains('Add Task').click()
        cy.get('.task').should('have.length',2)


        cy.get('#filter').select('All')
        cy.get('.task').should('have.length',2)

        cy.get('#filter').select('urgent')
        cy.get('.task').should('have.length',1)

        cy.get('#filter').select('moderate')
        cy.get('.task').should('have.length',1)
    })
})