const createInstructor = function (firstName, lastName) {
    return{
        firstName,
        lastName
    }
}

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

const instructorTwo = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName  + " says bye!";
    }
  }



const createAnimal = function(animal, speak, sound){
    return {
    animal,
    [speak]() {
        console.log(sound);
    }
    }
}

const d = createAnimal("dog", "bark", "Woooof!")
d.bark()  

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
s.bleet()