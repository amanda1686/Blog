describe("Home", () =>{
    beforeEach(() =>{
        cy.visit("http://localhost:5173/post/dune")
    });
    it("display carrousell", () =>{
        cy.get("button").contains("Next");
    })
})