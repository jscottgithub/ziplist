"use strict";
function zipList(input1 = [], input2 = []) {
    let i;
    const output = [];
    for (i = 0; i < input1.length; i++) {
        output.push(input1[i], input2[i]);
    }
    return output;
}
function zipListTheFunctionalWay(input1 = [], input2 = []) {
    const output = [];
    input1.forEach((thing, index) => {
        output.push(thing, input2[index]);
    });
    return output;
}
console.log(zipList(['1', '2', '3'], ['x', 'y', 'z']));
console.log(zipListTheFunctionalWay(['1', '2', '3'], ['x', 'y', 'z']));
