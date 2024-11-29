export class HomePage {
  static HomePage_profile_Icon = ".profile-icon";
  static HomePage_sendOTP_button = "cy.get('.btn--red')";

  static homepageWith() {
    //validate to see if this is present then click to sign out to sign in again
    // create 2 methods for teh above logic
    cy.get(this.HomePage_profile_Icon).click();
  }
}
