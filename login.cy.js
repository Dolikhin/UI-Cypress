describe('Тестирование страницы авторизации', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('должен войти с правильными данными', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.url().should('include', '/inventory');
  });

  it('должна отобразиться ошибка с неверными данными', () => {
    cy.get('#user-name').type('invalid_user');
    cy.get('#password').type('wrong_password');
    cy.get('#login-button').click();

    cy.get('.error-message-container').should('be.visible');
  });
});




