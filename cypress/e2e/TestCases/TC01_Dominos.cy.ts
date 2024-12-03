/// <reference types = "cypress" />

import { Runnable } from "mocha";
import { SignUpPage } from "../Pages/SignUp";
import { HomePage } from "../Pages/HomePage";
import { MenuPage } from "../Pages/MenuPage";
import { CheckOutPage } from "../Pages/CheckOutPage";
import { TrackPage } from "../Pages/TrackPage";

describe("Domino’s India Test Scenarios", () => {
  beforeEach("Set Device and reach the website", () => {
    cy.setDevice("Desktop");
    cy.visit("/");
    Cypress.on("uncaught:exception", (err, Runnable) => {
      return false;
    });
  });

  it.skip("User Registration and Login", () => {
    cy.fixture("userDetails").then((data) => {
      SignUpPage.signUpWith(data.MobileNumber);
      HomePage.ValidateThatWeReachedTheHomePage();
      HomePage.LogOutFormHomePage();
      SignUpPage.loginWith(data.MobileNumber);
      HomePage.ValidateThatWeReachedTheHomePage();
    });
  });

  it.skip("Product Search and Add to Cart", () => {
    cy.fixture("product").then((data) => {
      SignUpPage.login();
      HomePage.ValidateThatWeReachedTheHomePage();
      HomePage.SearchForProduct(data.pizza);
      MenuPage.ValidateTheProduct(data.pizza);
      MenuPage.SelectTheProductToCart();
      MenuPage.ValidateTheProductInCart(data.pizza);
    });
  });
  it.skip("Customizing Pizza and Checkout", () => {
    cy.fixture("product").then((data) => {
      SignUpPage.login();
      HomePage.ValidateThatWeReachedTheHomePage();
      HomePage.SearchForProduct(data.pizza);
      MenuPage.CustomizeTheProduct();
      MenuPage.ValidateTheProductInCart(data.pizza);
      CheckOutPage.AddAddress();
      CheckOutPage.PlaceOrder();
      CheckOutPage.SelectLocation();
    });
  });
  it("Track Order", () => {
    cy.fixture("product").then((data) => {
      SignUpPage.login();
      HomePage.ValidateThatWeReachedTheHomePage();
      TrackPage.TrackOrder(data.Orderid);
    });
  });
});
