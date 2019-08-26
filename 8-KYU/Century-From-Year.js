// The first century spans from the year 1 up to and including the year 100, 
// The second - from the year 101 up to and including the year 200, etc.

// Given a year, return the century it is in.

const century = (year) => {
    const cent = 100
    const time = year/cent
    if(year <= cent){
        return 1
    }
    else if(time > Math.round(time)){
        return Math.round(time) + 1
    }
    
    return Math.round(time)
}