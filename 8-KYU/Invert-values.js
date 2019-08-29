// Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

const invert = (a) => {
    return a.map(e => -e)
}