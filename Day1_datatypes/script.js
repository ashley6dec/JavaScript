// console.log("Hello World",123,"435");
// let a=9;
// let b = "abc";
// let c = true;
// let d = null;
// let e = undefined;
// let f=BigInt(7839389);
// let g = Symbol("Key");

// console.log(a,b,c,d,e,f,g);
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);


let obj = {
    name: 'gurleen', 
    age : 28, 
    isStudent: false,
    skills: ["HTML","CSS","JavaScript"],
};
console.log(obj.skills);

obj.age = 29;

console.log(obj.age);
console.log(obj);
//to del obj

delete obj.skills;
console.log(obj);