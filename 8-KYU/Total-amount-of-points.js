// Our football team finished the championship. The result of each match look like "x:y". 
// Results of all matches are recorded in the collection.

// Write a function that takes such collection and counts the points of our team in the championship. 
// Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point

const points = (games) => {
    return games.reduce((tot, [x, y, z]) => tot + (x > z ? 3 : x === z), 0)
}