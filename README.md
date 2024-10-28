# DSI Assignment
This project is a demonstration of using Cypress for end-to-end testing with the Page Object Model (POM) pattern. It includes a GitHub Actions workflow to automate the testing process.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Cypress Tests](#cypress-tests)
- [GitHub Actions](#github-actions)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/your-username/dsiassignment.git
  cd dsiassignment
  ```

2. Install the dependencies:

  ```bash
  npm install
  ```

## Usage

### Running the Application

To start the application, run:

```bash
npm start
```

### Running Cypress Tests

To open the Cypress Test Runner, run:

```bash
npx cypress open
```

To run Cypress tests in headless mode, run:

```bash
npx cypress run
```
You can also specify the browser for running the tests:

- For Chrome:

  ```bash
  npm run cypress:chrome
  ```

- For Firefox:

  ```bash
  npm run cypress:firefox
  ```

- For Edge:

  ```bash
  npm run cypress:edge
  ```

- For Electron:

  ```bash
  npm run cypress:electron
  ```
```

## Project Structure

```plaintext
cypress/
  ├── e2e/
  │   └── checkout.cy.js
  ├── fixtures/
  │   └── example.json
  ├── pageObjects/
  │   ├── login.js
  │   ├── inventoryPage.js
  │   ├── cartPage.js
  │   └── checkoutPage.js
  ├── support/
  │   ├── commands.js
  │   └── e2e.js
  └── config.js
.github/
  └── workflows/
    └── cypress.yml
.gitignore
package.json
README.md
```

### Cypress Tests

#### Page Objects

- **LoginPage**: Handles login actions.
- **InventoryPage**: Handles actions related to the inventory.
- **CartPage**: Handles actions related to the shopping cart.
- **CheckoutPage**: Handles actions related to the checkout process.

#### Test Case

The main test case is located in `cypress/e2e/checkout.cy.js` and performs the following steps:

1. Navigate to the website and login.
2. Add items to the cart.
3. Remove an item from the cart.
4. Verify the correct items are in the cart.
5. Complete the checkout process.

## GitHub Actions

The project includes a GitHub Actions workflow defined in `.github/workflows/cypress.yml`. This workflow:

- Runs on every push and pull request to the main branch.
- Sets up the Node.js environment.
- Installs dependencies.
- Runs Cypress tests.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
