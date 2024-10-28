import LoginPage from '../pageObjects/login';
import InventoryPage from '../pageObjects/inventoryPage';
import CartPage from '../pageObjects/cartPage';
import CheckoutPage from '../pageObjects/checkoutPage';

describe('Checkout Item Test', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  it('should complete checkout process', () => {
    // Step 1: Navigate to the website and login
    loginPage.visit();
    loginPage.login('standard_user', 'secret_sauce');

    // Step 2: Add items to the cart
    const items = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket'];
    items.forEach(item => {
      inventoryPage.addItemToCart(item);
    });

    // Step 3: Remove one item from the cart
    cartPage.visit();
    cartPage.removeItem('Sauce Labs Bike Light');

    // Step 4: Verify the correct items were added to the cart
    const remainingItems = ['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket'];
    cartPage.verifyItemsInCart(remainingItems);

    // Step 5: Complete the checkout process
    checkoutPage.startCheckout();
    checkoutPage.fillCheckoutForm('John', 'Doe', '12345');
    checkoutPage.finishCheckout();
  });
});