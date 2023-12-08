describe("Exemplu unde", ()=>{

    //it('verific daca un URL contine ceva', () =>{
       // cy.visit('https://www.digi24.ro/stiri/externe/ambasada-sua-din-bagdad-a-fost-atacata-cu-rachete-2608067');
      //  cy.url().should('include', '/stiri/')

    //it('astepta 10 min', () =>{
        //cy.visit('https://google.com');
        //cy.get('#L2AGLb > .QS5gu').click();
        //cy.wait(10000); // 10sec 1000=1sec
       // cy.get('#APjFqb').type('Au trecut 10sec');

    //it('selectez folofind un atribut', () =>{
        //cy.visit('https://google.com');
        //cy.get('#L2AGLb > .QS5gu').click();
        //cy.get('[alt="Sezonul sărbătorilor de iarnă 2023"]').should("be.visible");
        //cy.screenshot();

        //it('verific o valoare din input', () =>{
       // cy.visit('https://google.com');
        //cy.get('#L2AGLb > .QS5gu').click();
        //const googleSearch = cy.get('#APjFqb'); //constanta
        //googleSearch.type ('123');
       // googleSearch.should('have.value', '123'); //assertion contine textul 

    it('verific o valoare din input', () => {

        cy.visit('https://carturesti.ro/');
        cy.get('#search-input').should('have.class', 'form-control');


    })





    })









