export class TrackPage {
  static TrackPage_profile_Icon = ".profile-icon";
  static TrackPage_Icon = ".mt14 > :nth-child(3) > div";
  static TrackPage_OrderId = ":nth-child(2) > .sc-iAyFgw > input";
  static TrackPage_Submit = ".sc-hSdWYo > .injectStyles-sc-1jy9bcf-0 > button";
  static TrackPage_Search_Icon = ".menu-search-icon";
  static TrackPage_Search_Box = "#searchQueryInputModal";
  static TrackPage_Location_Box = "#searchQueryInputModal";
  static TrackPage_Location_Search = "#searchQueryInputModal";

  static TrackOrder(Orderid: number) {
    cy.get(this.TrackPage_profile_Icon).click();
    cy.get(this.TrackPage_Icon).click();
    cy.get(this.TrackPage_OrderId).type(Orderid.toString());
    cy.get(this.TrackPage_Submit).click();
  }

  static PlaceOrder() {
    cy.get(this.TrackPage_Search_Icon).click();
  }
  static SelectLocation() {
    cy.get(this.TrackPage_Location_Box).click();
    cy.get(this.TrackPage_Location_Search).click();
  }
}
