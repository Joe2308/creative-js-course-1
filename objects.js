// An object contains properties and values (Key value pairs)

const user = {
    name: "Joe",
    age: 25,
    married: false,
    greet: function () {
        console.log("Hello there!");
    }
};

// A function that is the property of an object is called its method
user.greet()

// console.log() is a built in method in Javascript

console.log(user.name);
console.log(user.age);
console.log(user.married);

console.warn("Holey moley!!");