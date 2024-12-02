export class HomePage {
  static HomePage_profile_Icon = ".profile-icon";
  static HomePage_sendOTP_button = "cy.get('.btn--red')";
  static HomePage_LogOut_button = ".profile-drawer > .btn";
  static HomePage_MenuBar = ".jfi-menu-full";
  static HomePage_Search_Icon = ".menu-search-icon";
  static HomePage_Search_Box = "#searchQueryInputModal";

  static ValidateThatWeReachedTheHomePage() {
    cy.get(this.HomePage_profile_Icon).should("be.visible");
  }
  static LogOutFormHomePage() {
    cy.get(this.HomePage_profile_Icon).click();
    cy.get(this.HomePage_LogOut_button).click();
  }

  static SearchForProduct(pizza: string) {
    cy.get(this.HomePage_MenuBar).click();
    cy.get(this.HomePage_Search_Icon).click();
    cy.get(this.HomePage_Search_Box).type(pizza);
  }
}
