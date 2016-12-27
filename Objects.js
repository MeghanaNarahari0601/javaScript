var person = {}
console.log(person)
person.name = "meghana"
person.age = 15
person.email = "meghana.narahari@gmail.com"
console.log(person)

console.log(person.age)
person.happyBirthday = function(){
    this.age ++
}

person.happyBirthday()
console.log(person.age)

person.happyBirthday()
console.log(person.age)