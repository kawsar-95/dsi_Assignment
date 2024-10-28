class InventoryPage {
  addItemToCart(itemName) {
    cy.contains(itemName).click();
    cy.get('.btn_primary.btn_inventory').click();
    cy.get('.inventory_details_back_button').click();
  }
}

export default InventoryPage;