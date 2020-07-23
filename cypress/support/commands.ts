import {RequestStub} from "./stub/request-stub";

export function logout() {
    cy.visit('http://www.google.com');
}

export function routeStub(stub:RequestStub) {
    cy.route(stub.httpMethod, stub.endPoint, 'fixture:' + stub.stub);
}
