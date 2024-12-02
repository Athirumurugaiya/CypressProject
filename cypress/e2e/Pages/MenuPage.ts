export class MenuPage {
  static MenuPage_SearchResult =
    ".results-populated > .cards-wrap > .cards-holder > :nth-child(1) > .card-size > .card-content > .at-botm > .pizza-info > h2 > .pizza-title";
  static MenuPage_SelectProduct =
    ".results-populated > .cards-wrap > .cards-holder > :nth-child(1) > .card-size > .card-content > .at-botm > .selected-info > .main-cta > .btn";
  static MenuPage_VewCart =
    ":nth-child(3) > .botm-bar-wrap > .bottom-nav > .nav-item > .pt9 > .ml10";
  static MenuPage_ProductInCart = ".item--ttl";
  static MenuPage_ItemCount = ".cntr-val";
  static ValidateTheProduct(pizza: string) {
    cy.get(this.MenuPage_SearchResult).should("contain.text", pizza);
  }
  static SelectTheProductToCart() {
    cy.get(this.MenuPage_SelectProduct).click();
  }

  static ValidateTheProductInCart(product: string) {
    cy.get(this.MenuPage_VewCart).click();
    cy.get(this.MenuPage_ProductInCart).should("contain.text", product);
    cy.get(this.MenuPage_ItemCount).should("contain.text", "1");
  }
}
