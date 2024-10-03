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
  });
});
