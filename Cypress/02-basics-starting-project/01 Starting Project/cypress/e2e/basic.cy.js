/// <reference types="Cypress"/>

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5174')
    cy.get('.main-header img')
  });

  it('should have an image',()=>{
    cy.visit('http://localhost:5174')
    cy.get('.main-header img').should('have.length',1)
  })
})