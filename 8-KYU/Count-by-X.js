// Create a function with two arguments that will return a list of length (n) with multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

const countBy = (x, n) => {
    const z = []
    for(let i = 1; i <= n; i++){
        z.push(i * x)
    }
    return z
}