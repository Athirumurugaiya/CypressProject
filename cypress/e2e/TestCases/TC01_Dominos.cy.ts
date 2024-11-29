/// <reference types = "cypress" />

import { Runnable } from "mocha";
import { SignUpPage } from "../Pages/SignUp";

describe("Domino’s India Test Scenarios", () => {
  beforeEach("Set Device and reach the website", () => {
    //cy.setDevice("Desktop");
    cy.viewport(1280, 720);
    cy.visit("/");
    Cypress.on("uncaught:exception", (err, Runnable) => {
      return false;
    });
  });

  it("User Registration and Login", () => {
    cy.fixture("userDetails").then((data) => {
      SignUpPage.signUpWith(data.MobileNumber);
    });
  });
});
