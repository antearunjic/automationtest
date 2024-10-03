describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://demoqa.com/login");

    //Go to registration
    cy.get("#newUser").click();
    cy.url().should("include", "/register");
  });
});
