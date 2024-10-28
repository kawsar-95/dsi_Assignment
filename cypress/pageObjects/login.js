class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  login(username, password) {
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('#login-button').click();
  }
}

export default LoginPage;