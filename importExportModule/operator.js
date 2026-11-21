const add = (a, b) =>{
    return a+b;
};

const sub = (a, b) =>{
    return a-b;
};

const mult = (a, b) =>{
    return a*b;
};

const name = "Mehnaz";
// module.exports = add;
//module.exports = name;



// Other way 
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mult = mult;

// further shortcut way 
module.exports = { add, sub, mult, name};
