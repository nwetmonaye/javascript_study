var name = 'Nwet';
var age = 23;
var hasHobby = true;
//  function summarize(yourName,yourAge,yourHasHobby){
//     return "Your Name: " + yourName +", Your Age: "+ yourAge +"and Your Hobby: "+ yourHasHobby;

//  }

/*arrow function*/
 const summarize = (yourName,yourAge,yourHasHobby) => {
   return "Your Name: " + yourName +", Your Age: "+ yourAge +"and Your Hobby: "+ yourHasHobby;
 }
 console.log(summarize(name,age,hasHobby));


 /*object , properties , methods*/
 const person = {
   name: "Max",
   age: 24,
   greet(){
      console.log("Hi, I'm " , this.name);
   }
 };
 person.greet();

 /* Array & Array methods */
 const hobbies = ['coding','singing'];
 for(let hobby of hobbies){
   console.log(hobby);
 }
 //create new array
 console.log(hobbies.map(hobby => 'Hobby: '+ hobby));
 console.log(hobbies);

 /* Array,Objects & Reference type*/
 const programming = ['Java','Node js'];
 programming.push('Javascript');
 console.log(programming);

 /* Spread & Rest Operator */
 const fruits = ['Apple','Orange'];
 const fruitsCoppy = fruits.slice();
   //spread
 const fruitsCoppy1 = [...fruits];
 console.log(fruitsCoppy);
 console.log(fruitsCoppy1);

   //Rest
 const toArray = (...args) => {
   return args;
 }
 console.log(toArray(1,2,3,4));

 /* Destructuring*/
 const student = {
   name: 'Mg Mg',
   age: 15,
   detail(){
      console.log("I'm "+ this.name);
   }
};
// const printName = (studentData) =>{
//    console.log(studentData.name);
// }
const printName = ({name}) =>{
      console.log(name);
   }
printName(student);

const cloth = {
   tname: 't - shirt',
   price: 15000,
};
const {tname, price} = cloth;
console.log(tname,price);

const songs = ["Goash","Love"];
const [song1 , song2] = songs;
console.log(song1, song2);


/* Async code & promises */
   /*async*/

// const fetchData = callback =>{
//    setTimeout(() => {
//       callback('Done');
//    },2000)
// }
// setTimeout(() => {
//    console.log("Hello it is me!!");
//    fetchData(text => {
//       console.log(text);
//    })
// },2000)


const fetchData = () =>{
   const promise = new Promise ((resolve,reject) => {
      setTimeout(() => {
         resolve('Done');
      },2000);
   });
   return promise;
   
}
setTimeout(() => {
   console.log("Time is working !!");
   fetchData()
   .then(text => {
      console.log(text);
      return fetchData();
   })
   .then(text1 =>{
      console.log(text1);
      
   })
},2000)
  //sync
  console.log("Nwet");
  console.log("Mon");
