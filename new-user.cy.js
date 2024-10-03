describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://demoqa.com/register");

    //Create new user
    cy.get("#firstname").type("antea");
    cy.get("#lastname").type("runjic");
    cy.get("#userName").type("antearunjic");
    cy.get("#password").type("AbCd12345@");
    cy.get("#register").click();
    cy.url().should("include", "/profile");
  });
});
