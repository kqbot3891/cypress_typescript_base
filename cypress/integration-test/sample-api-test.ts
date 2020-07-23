describe('Sample', {
    baseUrl: 'http://jsonplaceholder.typicode.com'
}, () => {
    it('make request to', () => {
        cy.request('GET', '/albums')
            .then((response) => {
                cy.log(JSON.stringify(response));
                expect(response.status).to.eq(200)
                expect(response.body).to.have.lengthOf(100);
                expect(response.body[2]).to.have.property('id').to.be.eq(3);
                expect(response.body[2]).to.have.property('title').to.be.eq('omnis laborum odio');
            })
    });
});


