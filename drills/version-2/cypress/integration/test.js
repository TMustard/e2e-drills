describe("News items", () => {
  it("should show items on multiple pages", () => {
    cy.visit("/");
    cy.title().should("include", "Vue HN 2.0");
    cy
      .get(".news-list")
      .find(".news-item")
      .should("have.length.gt", 1);

    cy
      .get("a")
      .contains("New")
      .click();
    cy.url().should("contain", "/new");
    cy
      .get(".news-list")
      .find(".news-item")
      .should("have.length.gt", 1);

    cy
      .get(".news-list")
      .find(".news-item")
      .should("not.exist");
    cy
      .get("a")
      .contains("more >")
      .click();
    cy.url().should("contain", "/new/2");
    cy
      .get(".news-list")
      .find(".news-item")
      .should("have.length.gt", 1);

    cy
      .get("a")
      .contains("Jobs")
      .click();
    cy.url().should("contain", "/job");
    cy
      .get(".news-list")
      .find(".news-item")
      .should("not.exist");
    cy
      .get(".news-list")
      .find(".news-item")
      .should("have.length.gt", 1);
  });
});
