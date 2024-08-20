//====== if statement ============


// **  notes :
//  else ====>مش بتاخد جنبها شرط 
//  default ====>مش بتاخد جنبها شرط 

// var age = 20 ;

// if (age >=50){
//     console.log("old and the age is: " + age);
// }
// else{
//     console.log("young and the age is: " + age);
// }

// var age = 60 ;
// if (age  >= 60){
//     console.log("old and the age is: " + age);
// }
// else if (age >= 40 & age < 60){
//     console.log("mid and the age is: " + age);

// }
// else{
//     console.log("young and the age is: " + age);
// }

// console.log("done")


// var age = 59 ;
// if (age  >= 60){
//     console.log("old and the age is: " + age);
// }
// else if (age >= 40 ){
//     console.log("mid and the age is: " + age);

// }
// else{
//     console.log("young and the age is: " + age);
// }

// console.log("done")


// var age = 59 ;
// var health = "strong"
// if (age  >= 60){
//     console.log("old and the age is: " + age);
// }
// else if (age >= 40 && age < 60  || health == "strong" ){
//     console.log("mid and the age is: " + age);

// }
// else{
//     console.log("young and the age is: " + age);
// }

// console.log("done")




// degree=prompt("Enter Your Degree")
// if(degree >= 90) console.log('A')
//     else if(degree > 80 & degree < 90 ) console.log('B')
//     else if(degree > 70 & degree < 80 ) console.log('c')
//     else if(degree > 60 & degree < 70 ) console.log('D')
//     else if(degree == 60  ) console.log('D')
//     else if(degree < 60  ) console.log('F')
//     else console.log('Fail')
// var start = prompt("Enter start Number");
// var end = prompt("Enter End Number");
// var breakN = prompt("Enter Break Number");
// var cont = prompt("Enter Continue Number");






//==================== switch-case=================>
// ** switch ===> الحاله اللي بتحقق الشرط لما بتتحقق كل اللي تحتها بيتنفذ حتي لو لا ينطبق عليه نفس الشرط


// var age = 59 ;
// var health = "strong"
// switch (health){
//     case("strong"):
//     console.log("Your Health is good")
//     case("weak"):
//     console.log("you need to pay attention to your health")
//     default:
//         console.log("good")
// }

// ** علشان اخليه ينفذ الشرط اللي انا محتاجه بس ويخرج يكمل باقي الكود اللي برا
// var age = 59 ;
// var health = "weak"
// switch (health){
//     case("strong"):
//     console.log("Your Health is good")
//     break
//     case("weak"):
//     console.log("you need to pay attention to your health")
//     break
//     default:
//         console.l.og("good")
// }

// **علشان اقدر احط عبارات منطقيه او شرطيه في الcase 


// var age = 50
// var health = "strong"
// switch (true) {
//     case(age >= 60):
//     console.log("old")
//     break
//     case(age >= 40):
//     console.log("mid")
//     break
//     default:
//         console.log("young")
// }




// ==================
// **BMI==>يحسب الكتله بناء علي معادله رياضيه م 
// الكتله = الوزن بالكيلو جرام /*2(لطول بالمتر) 
// يصنف الوزن اذا زائد او لاء 

// document.getElementById("submit-btn").addEventListener("click",function(){
//     var weight = document.getElementById("weight-input").value
//     var height = document.getElementById("height-input").value
//     var bmi = weight/(height*height)
//     document.getElementById("bmi").innerHTML = bmi
//     var bmiCategory="نحيف"
    
//     if(bmi < 18){
//         bmiCategory ="نحيف"
//     }else if(bmi < 24){
//         bmiCategory ="وزن مثالي"
    
//     }else if(bmi < 29.9){
//         bmiCategory ="وزن زائد"
    
//     }else if(bmi < 34.9){
//         bmiCategory ="سمنه درجه اولي"
    
//     }else if(bmi < 39.9){
//         bmiCategory ="سمنه درجه ثانيه"
    
//     }else {
//         bmiCategory = "سمنه خطيره"
//     }
//     document.getElementById("bmi-category").innerHTML = bmiCategory





//  })



//  ======================================


// ================**Array=====================

// var students = ["Azza" , "Eman", "Manal" , "Noura"]
// console.log(typeof students)
// document.getElementById("students").innerHTML = students
// console.log(students)
// console.log(students.length)
// console.log(students[0])
// console.log(students[8])
// students.push("Salma")
// console.log(students)
// students[4] = "sara"
// console.log(students)
// students.pop()
// console.log(students)
// students.splice(1)   
// students.splice(index "delete this index and all index after this")   
// console.log(students)

// students.splice(1 ,2) 
// students.splice(index,number of deleted index) 
// console.log(students)
// students.splice(1 ,1)
// students.splice(1 ,1,"salma")
// students.splice(1 ,1,replace deleted item by this)
// console.log(students)
// students.splice(2,0,"Dina")
// students.splice(go to index,Don’t delet,add "Dina")
// console.log(students)

// var arr =[10 , 11 , 41 ]
// console.log(arr.toString())
// console.log()

// console.log(arr.join("-"))
// console.log(arr.sort())
// console.log(arr.reverse())


var users = []

function addUser(){
    var userData ={
        name : prompt("type user Name") ,
        id : prompt("type user id") ,
        balance :prompt("type user balance")     
}
users.push(userData)
 
}
addUser()
addUser()
console.log(users)

 function editUserBalanceById(x, y){
    var x = prompt("Enter Your Id")
    var y = prompt("Enter User Balance")

   var index =  users.findIndex(item => item.id == x) 
    users[index].balance = y

 }
 editUserBalanceById()
 console.log(users)

 function deleteUserById(){
    var x = prompt("Enter id you want to Delete")
    var index =users.findIndex(item => item.id == x)
    users.splice(index , 1)
 }
 deleteUserById()
 console.log(users)

 

































