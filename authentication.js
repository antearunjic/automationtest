describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://demoqa.com/login");

    //Login unsuccessful - only username
    cy.get("#userName").type("antearunjic");
    cy.get("#login").click();
    cy.get("#password")
      .should("have.css", "border-color")
      .and("eq", "rgb(220, 53, 69)");
    cy.get("#userName").clear();

    //Login unsuccessful - only password
    cy.get("#password").type("AbCd12345@");
    cy.get("#login").click();
    cy.get("#userName")
      .should("have.css", "border-color")
      .and("eq", "rgb(220, 53, 69)");
    cy.get("#password").clear();

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
