import { Messaging } from "./messaging";

describe("Messaging" , () => {

    afterEach
    it("should return undefined", () => {
        const sut:Messaging = new Messaging;
        expect(sut.sendMessage('teste1')).toBeUndefined();
    }) 
    it("should call console.log", () => {
        const sut:Messaging = new Messaging;
        const consoleSpy = jest.spyOn(console, 'log');
        sut.sendMessage('teste2');
        expect(consoleSpy).toHaveBeenCalledTimes(1);

    })
    it("should call console.log with 'Pedido salvo com sucesso'", () => {
        const sut:Messaging = new Messaging;
        const consoleSpy = jest.spyOn(console, 'log');
        sut.sendMessage('teste');
        expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:','teste');

    })
})