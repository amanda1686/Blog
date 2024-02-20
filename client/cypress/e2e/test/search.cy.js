describe("Home", () =>{
    beforeEach(() =>{
        cy.visit("http://localhost:5173/search")
    });
    it("display placeholder", () =>{
        cy.get("h1").contains("Posts results");
    })
})