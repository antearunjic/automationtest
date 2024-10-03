describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://demoqa.com/register");

    //Login successful
    cy.get("#firstname").type("antea");
    cy.get("#lastname").type("runjic");
    cy.get("#userName").type("antearunjic");
    cy.get("#password").type("AbCd12345@");

    cy.get('iframe[src*="recaptcha"]', { timeout: 10000 })
      .should("be.visible")
      .then(($iframe) => {
        // Access the iframe's content
        const iframeBody = $iframe.contents().find("body");

        // Attempt to click the checkbox
        cy.wrap(iframeBody)
          .find('span[role="checkbox"]')
          .click({ force: true }); // Use force: true if the element is not interactable
      });

    // Optionally, verify that the checkbox is now checked
    cy.get('span[role="checkbox"][aria-checked="true"]').should("exist");

    cy.get("#register").click();
    cy.url().should("include", "/profile");
  });
});
