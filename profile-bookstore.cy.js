describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://demoqa.com/login");

    //Login successful
    cy.get("#userName").type("antearunjic");
    cy.get("#password").type("AbCd12345@");
    cy.get("#login").click();
    cy.url().should("include", "/profile");

    //Go to bookstore
    cy.get("#gotoStore").click();
    cy.url().should("include", "/books");
  });
});
