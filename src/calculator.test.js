import calculator from "./calculator";

test('Add 1 + 2 to equal 3', () => {
    expect(calculator().sum(1, 2)).toBe(3)
})

test('Subtract 3 - 2 to equal 1', () => {
    expect(calculator().subtract(3, 2)).toBe(1)
})

test('multiply 2 * 5 to equal 10', () => {
    expect(calculator().multiply(2, 5)).toBe(10)
})

test('divide 10 / 2 to equal 5', () => {
    expect(calculator().divide(10, 2)).toBe(5)
})