// REST PARAMETERS
export const clases = (...clases) => {
    return clases.filter(c => typeof c === 'string').join(' ')
}