
describe("On Linkedin", () =>{

    it("I can login",() => {
        cy.visit("https://linkedin.com");
        cy.get('.nav__button-secondary').click();
        cy.get('[action-type="ACCEPT"]').click();
        cy.get('#username').type("stateelena24@yahoo.com");
        cy.get('#password').type("Victoria95@");
        cy.get('.btn__primary--large').click();
        cy.get('#ember13').should("exist");
        
        

    })
})