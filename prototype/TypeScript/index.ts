import { ConcretePrototype } from "./clone-class";

// user code

// console.clear()
let user1 = new ConcretePrototype({
  name: "Ahmed",
  age: 20,
  email: "taher.js.stack@gmail.com" 
})

let user2 = user1.clone()

// user2.getUserData().name = 'Ali';
// user2.getUserData().age = 22;
// user2.getUserData().name = 'A@a.com';

console.log('user1 --->', user1)
console.log('user2 --->', user2)

// console.log('user2.getUserData --> ', user2.getUserData().name = '555555')


if (user1 === user2) {
    console.log('Both Instance Are the same')
} else {
    console.log('Clone Objects Are separate Instance')
}

