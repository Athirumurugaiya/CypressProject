export class SignUpPage {
  static signUpPage_mobile = `[data-testid="user-input"]`;
  static signUpPage_sendOTP_button = "cy.get('.btn--red')";

  static signUpWith(mobile: string) {
    cy.get("button").click();
    cy.get(this.signUpPage_mobile).type(mobile);
    cy.wait(1000).get(this.signUpPage_sendOTP_button).click();
  }
}
