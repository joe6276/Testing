///<reference types="Cypress"/>
describe('Testing Navigation', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[data-cy="header-about-link"]').click()
    cy.location('pathname').should('equal', '/about')
    cy.go('back')
    cy.location('pathname').should('equal', '/')
    cy.get('[data-cy="header-home-link"]').click()
    cy.location('pathname').should('equal', '/')
  })
})