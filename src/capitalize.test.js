import capitalize from "./capitalize";

test('capitalze first letter in string', () => {
    expect(capitalize('hello')).toBe('Hello')
})

test('HELLO should become HELLO', () => {
    expect(capitalize('HELLO')).toBe('HELLO')
})

test('Hello should become Hello', () => {
    expect(capitalize('Hello')).toBe('Hello')
})