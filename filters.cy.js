describe('Тесты фильта', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('должен отфильтровать по цене (от меньшей к большей)', () => {
    cy.get('.product_sort_container').select('lohi');

    cy.get('.inventory_item_price').then((prices) => {
      const priceValues = [...prices].map(el => parseFloat(el.innerText.replace('$', '')));
      expect(priceValues).to.deep.equal(priceValues.sort((a, b) => a - b));
    });
  });
});