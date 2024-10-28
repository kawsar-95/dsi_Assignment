class CheckoutPage {
  startCheckout() {
    cy.get('.checkout_button').click();
  }

  fillCheckoutForm(firstName, lastName, postalCode) {
    cy.get('#first-name').type(firstName);
    cy.get('#last-name').type(lastName);
    cy.get('#postal-code').type(postalCode);
    cy.get('.cart_button').click(); // Continue button
  }

  finishCheckout() {
    cy.get('.cart_button').click(); // Finish button
  }
}

export default CheckoutPage;