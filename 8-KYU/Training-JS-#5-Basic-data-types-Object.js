// Give you a function ```animal```, accept 1 parameter:```obj``` like this:

// ```
// {name:"dog",legs:4,color:"white"}
// ```

// and return a string like this:

// ```
// "This white dog has 4 legs."

const animal = o => `This ${o.color} ${o.name} has ${o.legs} legs.`;
