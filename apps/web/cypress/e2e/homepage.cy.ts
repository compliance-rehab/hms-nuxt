describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("navigation", () => {
    it("should have all navigation links", () => {
      const nav = cy.get("nav");
      nav.should("exist");

      const pricingLink = nav.get('a[href="/pricing"]');
      pricingLink.should("exist");
      pricingLink.should("contain", "Pricing");

      const blogLink = nav.get('a[href="/blog"]');
      blogLink.should("exist");
      blogLink.should("contain", "Blog");
    });
  });

  describe("banner", () => {
    it("should show banner on initial load", () => {
      const banner = cy.get('[data-test="banner"]');
      banner.should("exist");
      banner.should("contain.text", "New:  Automatic Compliance Documentation ");
    });
  });

  describe("dark mode", () => {
    it("should have a color mode toggle", () => {
      cy.get('[data-test="color-mode-toggle"]').should("exist");
    });

    it("should toggle to light mode if selected", () => {
      cy.wait(1000);
      cy.get('[data-test="color-mode-toggle"]').click();
      cy.get('[data-test="color-mode-toggle-item-light"]').click();

      cy.get("html").should("have.class", "light");
    });

    it("should toggle to dark mode if selected", () => {
      cy.wait(1000);
      cy.get('[data-test="color-mode-toggle"]').click();
      cy.get('[data-test="color-mode-toggle-item-dark"]').click();

      cy.get("html").should("have.class", "dark");
    });
  });
});
