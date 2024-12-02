export class SignUpPage {
  static signUpPage_mobile = `[data-testid="user-input"]`;
  static signUpPage_sendOTP_button = "cy.get('.btn--red')";

  static signUpWith(mobile: string) {
    cy.get("button").click();
    //cy.get(this.signUpPage_mobile).type(mobile);
    //cy.wait(1000).get(this.signUpPage_sendOTP_button).click();
    //cy.get(".text-cta").click();
  }
  static login() {
    cy.get("button").click();
    cy.get(".LoginScreenstyle__SkipButton-kqXUKn").click();
    cy.get(".text-cta").click();
    cy.get("#moe-dontallow_button", { timeout: 10000 }).click();
  }
  static loginWith(mobile: string) {
    cy.get("button").click();
    cy.get(this.signUpPage_mobile).type(mobile);
    cy.wait(1000).get(this.signUpPage_sendOTP_button).click();
  }
}
