export class CheckOutPage {
  static CheckOutPage_address = ".lgn-scrn > .bnglEO > .btn--grn";
  static CheckOutPage_PlaceOrder =
    ".sc-jKJlTe > .injectStyles-sc-1jy9bcf-0 > button";
  static CheckOutPage_LogOut_button = ".profile-drawer > .btn";
  static CheckOutPage_MenuBar = ".jfi-menu-full";
  static CheckOutPage_Search_Icon = ".menu-search-icon";
  static CheckOutPage_Search_Box = "#searchQueryInputModal";
  static CheckOutPage_Location_Box = "#searchQueryInputModal";
  static CheckOutPage_Location_Search = "#searchQueryInputModal";

  static AddAddress() {
    cy.get(this.CheckOutPage_address).click();
    cy.get(this.CheckOutPage_Search_Icon).click();
    cy.get(this.CheckOutPage_MenuBar).click();
    cy.get(this.CheckOutPage_Search_Box).click();
  }

  static PlaceOrder() {
    cy.get(this.CheckOutPage_PlaceOrder).click();
  }
  static SelectLocation() {
    cy.get(this.CheckOutPage_Location_Box).click();
    cy.get(this.CheckOutPage_Location_Search).click();
  }
}
