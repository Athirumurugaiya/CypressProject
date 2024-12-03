export class MenuPage {
  static MenuPage_SearchResult =
    ".results-populated > .cards-wrap > .cards-holder > :nth-child(1) > .card-size > .card-content > .at-botm > .pizza-info > h2 > .pizza-title";
  static MenuPage_SelectProduct =
    ".results-populated > .cards-wrap > .cards-holder > :nth-child(1) > .card-size > .card-content > .at-botm > .selected-info > .main-cta > .btn";
  static MenuPage_VewCart =
    ":nth-child(3) > .botm-bar-wrap > .bottom-nav > .nav-item > .pt9 > .ml10";
  static MenuPage_ProductInCart = ".item--ttl";
  static MenuPage_ItemCount = ".cntr-val";
  static MenuPage_ProductCustomize =
    ".results-populated > .cards-wrap > .cards-holder > :nth-child(1) > .card-size > .card-content > .at-botm > .extra-info > .tag-customize";

  static MenuPage_Productsize =
    '[for="size2"] > :nth-child(1) > .radio-wrapper > .radio > i';
  static MenuPage_Productcrust =
    '[for="crust3"] > :nth-child(1) > .radio-wrapper > .radio > .labl-txt';
  static MenuPage_Producttoppings =
    '[for="size2"] > :nth-child(1) > .radio-wrapper > .radio > i';
  static MenuPage_ProductAdd = ".customised-details > .btn";

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
  static CustomizeTheProduct() {
    cy.get(this.MenuPage_ProductCustomize).click();
    cy.get(this.MenuPage_Productsize).click();
    cy.get(this.MenuPage_Productcrust).click();
    cy.get(this.MenuPage_ProductAdd).click();
    //cy.get(this.MenuPage_SelectProduct).click();
  }
}
