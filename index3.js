//access data
const data = require("./2.students.json");


//for in
for(x in data){ //here data return value in 'x' .. x is key.
    console.log("For in: " + x);
    console.log(data[x]);
}