describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://demoqa.com/login");

    //Login unsuccessful - only password
    cy.get("#password").type("AbCd12345@");
    cy.get("#login").click();
    cy.get("#userName")
      .should("have.css", "border-color")
      .and("eq", "rgb(220, 53, 69)");
    cy.get("#password").clear();
  });
});
