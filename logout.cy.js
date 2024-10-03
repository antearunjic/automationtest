describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://demoqa.com/login");

    //Login successful
    cy.get("#userName").type("antearunjic");
    cy.get("#password").type("AbCd12345@");
    cy.get("#login").click();
    cy.url().should("include", "/profile");

    //Logout from profile
    cy.get("#submit").click();
    cy.url().should("include", "/login");
  });
});
