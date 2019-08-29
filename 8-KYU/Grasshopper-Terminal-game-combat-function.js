// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. 
// Health can't be less than 0.

const combat = (h, d) => {
    let nh = h - d
    return nh < 0 ? 0 : nh
}