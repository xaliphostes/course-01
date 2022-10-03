import { Serie } from "@youwol/dataframe"
import { meanValues } from "../lib"

test('test 1', () => {
    const serie = Serie.create({array: [1,2,3,4,5,6], itemSize: 6})
    expect( meanValues(serie, 0) ).toBeCloseTo(11.345)
    expect( meanValues(serie, 1) ).toBeCloseTo( 0.171)
    expect( meanValues(serie, 2) ).toBeCloseTo(-0.516)
})

test('test 4', () => {
    const serie = Serie.create({array: [1,2,3,4,5,6, 1,2,3,4,5,6, 1,2,3,4,5,6, 1,2,3,4,5,6], itemSize: 6})
    expect( meanValues(serie, 0) ).toBeCloseTo(11.345)
    expect( meanValues(serie, 1) ).toBeCloseTo( 0.171)
    expect( meanValues(serie, 2) ).toBeCloseTo(-0.516)
})
