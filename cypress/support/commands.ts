// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  "setDevice",
  (size: "Mobile S" | "Mobile M" | "Tablet" | "Desktop") => {
    switch (size) {
      case "Mobile S":
        cy.viewport(414, 896);
        break;
      case "Mobile M":
        cy.viewport(412, 869);
        break;
      case "Tablet":
        cy.viewport(768, 832);
        break;
      case "Desktop":
        cy.viewport(1920, 1080);
        break;
      default:
        throw new Error("Invalid viewport size");
    }
  }
);

declare namespace Cypress {
  interface Chainable {
    setDevice(
      size: "Mobile S" | "Mobile M" | "Tablet" | "Desktop"
    ): Chainable<void>;
  }
}
