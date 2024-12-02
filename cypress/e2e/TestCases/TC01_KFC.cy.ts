/// <reference types = "cypress" />

describe("KFC India Test Scenarios", () => {
  beforeEach("visit the site", () => {
    // cy.intercept("GET", "https://online.kfc.co.in/*", { statusCode: 200 });
    // cy.visit("https://online.kfc.co.in/", {
    //   headers: {
    //     "Accept-Encoding": "gzip, deflate, br, zstd",
    //     Accept:
    //       "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    //   },
    // });
    //cy.visit("https://online.kfc.co.in/", { failOnStatusCode: false });
    cy.visit("/");
  });
  it("TC1- User Registration and Login", () => {
    // cy.visit("https://online.kfc.co.in/", {
    //   headers: {
    //     // "Accept-Encoding": "gzip, deflate, br, zstd",
    //     "User-Agent": "axios/1.7.8",
    //   },
    // });

    // cy.origin("https://online.kfc.co.in/", () => {
    //   cy.get("selector"); // yup all good
    // });

    cy.get("");
  });
});
