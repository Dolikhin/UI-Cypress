describe('Функциональные тесты корзины', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('должен добавить товар в корзину', () => {
    cy.get('.inventory_item').first().find('button').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
  });

  it('должен удалить товар из корзины', () => {
    cy.get('.inventory_item').first().find('button').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');

    cy.get('.cart_button').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});