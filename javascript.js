let name = "Max";
let age = 12
let job = true;

//let,const,arrow function 

const details =(username, userage, userjob) =>{
    return (" name is " + username  + " age is " + userage + " job is " + userjob );
}

//object and this method
const students ={
    name : "sam",
    class : "10th",
    school : "max school",
    details : () =>{
            return ("name is " + this.name  );
    } 

}

//arrays 

const hobbies= ["playing","sleeping","drawing"];

//push method

hobbies.push("programming");

//spread operator
const copiedArray = [...hobbies];
console.log(copiedArray);

//for of loop in arrays
for (let hobby of hobbies ) {
    console.log(hobby);
}

//map method 
console.log(hobbies.map(hobby=> "Hobby:" + hobby ))

//calling function 

console.log(details(name,age,job));

students.details();


//object destructuring

const studentsDetails = {
    name : "sam",
    age : 12
}
const printDetails = ({name,age}) =>{
    console.log(name,age);
}
printDetails(studentsDetails);


//asynchronouse code and promises 

setTimeout(() =>{
    console.log("Hello Max")
},1000)

console.log("Hi")



//localstorage 

const children = {
    name : "jack",
    age : 15,
    gender : "male"
}

const result = window.localStorage.setItem('students', students);

console.log(result);