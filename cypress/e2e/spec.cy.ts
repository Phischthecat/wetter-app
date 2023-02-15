describe('My Test', () => {
  it('finds the content "Start"', () => {
    cy.visit('https://philschmucker.de/wetter-app')

    cy.contains('Start').click()
    cy.url().should('include', '/forecast')
  })
})
