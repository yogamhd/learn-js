/*console.log('Hello World')
console.warn('Hello Warning')
console.error('Hello Error')
console.info('Hello Info')
alert('Hello Alert')



console.log('Hello World')
const name = 'Yoga Pratama'
console.log(`Hello ${name}`)
alert(`Hello ${name}`)
*/


/*var name1 = 'Yoga Pratama M';

console.log(name1);

var human = {
    name:'Yoga',
    age:'22'
}
console.log(human);

var firstName = 'Yoga';
var lasttName = 'Pratama';

console.log(`Hallo ${firstName} ${lasttName}`); //ini disarankan

console.log('Hallo ' + firstName + ' ' + lasttName);

var greetings = `

Hallo, Nama saya Yoga
`;

console.log(greetings);

var humans = {
    name: 'Yoga Pratama',
    website: 'testing.com',
   twitter: 'twitter',
    github: 'github.com'
  }
  
console.log(humans);


//Array

var studens =['Akla', 'Yoga', 'Mega', 'Mei'];
console.log(studens);
console.log(studens [3]);
console.log(studens[studens.length -1]);
console.log(studens[3]);

var studentMatriks=[
    ['Akla', 'Yoga'],
    ['Mei', 'Mega'],
    ['Yosua', 'Dona', ['Apriadi']]
];
console.log(studentMatriks[1]); // output ['Mei'. 'Mega']
console.log(studentMatriks[2][2][0]); //output: 'Apriadi'
*/

//Object

/*var manusia = {
    name: 'Yoga',
    age: 22,
    isMarried: false,
    hobbies: ['eating', 'singing', 'sleeping'],
    address: {
        zipcode:'30662',
        city:'jakarta',
        street:'Kemang Selatan'
    }
};

console.log(manusia.name); //Output: 'Yoga' >Rekomended
console.log(manusia['name']); //Output: 'Yoga' >tidak rekomendasi karena puyeng

console.log(manusia.hobbies[2]); //Output: 'sleeping'
console.log(manusia.address.city); //Ouput: 'jakarta'
*/

//mereassign variabel

/*var manusia = {
    name: 'Yoga',
    age: 22,
    isMarried: false,
    hobbies: ['eating', 'singing', 'sleeping'],
    address: {
        zipcode:'30662',
        city:'jakarta',
        street:'Kemang Selatan'
    }
}; */

//manusia.name='Budi';
//console.log(manusia.name); //cara mengubah variabel


/*var studens =['Akla', 'Yoga', 'Mega', 'Mei'];
studens[1]='Apriadi';
console.log(studens[1]); */

/*var name = 'Yoga';
name = 'Pratama;';
console.log(name); //ouput: Pratama

//Array
var studens =['Akla', 'Yoga', 'Mega', 'Mei'];
studens[0]='Apriadi';
console.log('Apriyadi');

//Object
var human = {
    name: 'Yoga',
    age: 17
};
human.age = 24;
console.log(human.age); //output 24

//undefined and null
var animal;
console.log(animal);
//debugger;
//animal='koceng';
//console.log(animal);

//var month = null; //belum diisi
//console.log(null);
//console.log(month);
//console.log(month+1); */


/*function firstName(Yoga) {
    console.log(`Hello, ${Yoga}!`)
  }
  
  const nameA = 'Yoga'
  const nameB = 'Pratama'
  
  console.log(nameA)
  console.log(nameB)


  const checkAge = function(age) {
    if (age >= 18) {
      console.log('You are old enough')
    } else if (age < 18 && age >= 0) {
      console.log('You are still young')
    } else {
      console.log('You are not born yet')
    }
  }
  
  checkAge(10) // You are still young
  checkAge(25) // You are old enough
  checkAge(-2) // You are not born yet



  const addMarks = (text, mark, times) => {
    let newText = text
  
    for (let i = 0; i <= times; i++) {
      newText += mark
    }
  
    console.log(newText)
  }
  
  addMarks('Hello', '!', 1) // Hello!
  addMarks('Hello', '!', 3) // Hello!!!
  addMarks('How are you', '?', 1) // How are you?
  addMarks('How are you', '?', 2) // How are you??
  
  

  const showNameWithAge = (name = 'Unknown', age = 0) => {
    const nameWithAge = `${name} is ${age} year(s) old`
  
    return nameWithAge // return the value to be used later
  }
  
  const alpha = showNameWithAge('Alpha', 11)
  const betty = showNameWithAge('Betty', 42)
  const gamma = showNameWithAge('Gamma', 30)
  
  console.log(alpha)
  console.log(betty)
  console.log(gamma)
*/

var number1 = prompt('Isi angka pertama')
var number2 = prompt('Isi angka kedua')

function add(num1, num2){
    var result = Number(num1) +Number(num2)
    return result
}

console.log(add(number1, number2))
console.log(add(3,7))