class CartPage {
  visit() {
    cy.get('.shopping_cart_link').click();
  }

  removeItem(itemName) {
    cy.contains('.inventory_item_name', itemName).parents('.cart_item').find('.cart_button').click();
  }

  verifyItemsInCart(items) {
    items.forEach(item => {
      cy.contains('.inventory_item_name', item).should('exist');
    });
  }
}

export default CartPage;