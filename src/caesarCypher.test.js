import caesarCypher from "./caesarCypher";

test('hello to match ifmmp with shift of 1', () => {
    expect(caesarCypher('hello', 1)).toMatch(/ifmmp/)
})
