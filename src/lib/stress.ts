import { reduce, Serie } from '@youwol/dataframe'
import { eigenValue, eigenVector, mean } from '@youwol/math'

export function meanNormals(serie: Serie, index: number=0) {
    if (serie.itemSize !== 6) throw new Error('Serie must be with itemSize=6 (stress/strain)')
    return mean( eigenVector(serie).map( stress => [stress[3*index], stress[3*index+1], stress[3*index+2]]) )
}

export function meanValues(serie: Serie, index: number=0) {
    if (serie.itemSize !== 6) throw new Error('Serie must be with itemSize=6 (stress/strain)')
    return mean( eigenValue(serie).map( values => values[index]) )
}
