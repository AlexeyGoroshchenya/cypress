


describe('empty spec', () => {


  it('найти на странице ссылку на раздел', () => {

    if (window.screen.width > 1179) {
      cy.viewport(window.screen.width, 800)
    }

    cy.visit('https://l2-labs.com');

    if (window.screen.width < 1179) {
      cy.get('#menu-toggle').click()
    }


    cy.get('.header__menu').within(() => {
      cy.contains('Expertise').click()

      //Проверить, что по нажатию на элемент Expertise осуществляется переход на страницу https://l2-labs.com/expertise
      cy.location('href').should('eq', 'https://l2-labs.com/expertise')

    })


  })



  it('найти блоки и проверить. что их не менее 4', () => {

    cy.get('.expertises-page__col').each((el, index) => {

      if (index > 3) return true
    })

  })









})

