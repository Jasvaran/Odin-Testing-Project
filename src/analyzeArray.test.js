import analyze from "./analyzeArray";

test('return obj with min, max, length, and avg of array',
    () => {
        expect(analyze([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 })             
    })

test('return obj with min, max, length, and avg of array',
    () => {
        expect(analyze([2, 3, 6, 1])).toEqual({ average: 3, min: 1, max: 6, length: 4 })
    })