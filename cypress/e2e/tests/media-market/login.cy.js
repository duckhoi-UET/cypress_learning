describe(`Login site FXON`, () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  beforeEach(() => {
    cy.visit("/login/?lang=ja");
  });

  beforeEach(() => {
    cy.get(".column__contents").as("loginForm");
    cy.get("@loginForm").find("input[type=text]").as("email");
    cy.get("@loginForm").find("input[type=password]").as("password");
  });
  afterEach(() => {
    cy.wait(1000);
  });

  context("Kiểm tra GUI", () => {
    it("GUI_1: Kiểm tra di chuyển màn hình thành công- Hiển thị màn hình login", () => {});

    it("GUI_2: Kiểm tra title màn hình", () => {
      cy.contains("Login to")
        .should("exist")
        .should("have.class", "c-heading-middle")
        .should("be.visible");
    });

    it("GUI_3: Kiểm tra logo FXON", () => {
      cy.get("a.u-link--contents")
        .should("have.attr", "href")
        .and("equal", "https://dev.fxon.com/access.php?id=home")
        .get("a.u-link--contents>img")
        .should("have.css", "width", "126px")
        .should("exist");
    });
  });
});
