// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = (n) => {
    if(n % 2 === 0){
        return n * 8
    }
    return n * 9
}