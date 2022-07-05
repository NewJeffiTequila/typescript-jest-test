import { Persistency } from "./persistency";

describe("Persistency" , () => {
    it("should return undefined", () => {
        const sut:Persistency = new Persistency;
        expect(sut.saveOrder()).toBeUndefined();
    }) 
    it("should call console.log", () => {
        const sut:Persistency = new Persistency;
        const consoleSpy = jest.spyOn(console, 'log');
        sut.saveOrder();
        expect(consoleSpy).toHaveBeenCalledTimes(1);

    })
    it("should call console.log with 'Pedido salvo com sucesso'", () => {
        const sut:Persistency = new Persistency;
        const consoleSpy = jest.spyOn(console, 'log');
        sut.saveOrder();
        expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');

    })
})