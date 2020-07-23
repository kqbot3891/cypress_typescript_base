export class RequestStub {
    httpMethod: string;
    endPoint: string;
    stub: string;

    constructor(_method: string, _endPoint: string, _stubPath: string) {
        this.httpMethod = _method;
        this.endPoint = _endPoint;
        this.stub = _stubPath;
    }

    enableStub() {
        cy.route(
            this.httpMethod,
            this.endPoint,
            'fixture:' + this.stub
        )
    }
}