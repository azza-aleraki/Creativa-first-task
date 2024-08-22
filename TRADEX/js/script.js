const icon = document.getElementById('top-up');

  window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { 
            icon.style.display = 'block';
        } else {
            icon.style.display = 'none';
        }
    });
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    var firstInterval, secondInterval, thirdInterval, fourthInterval; 
    
    var firstCount = document.getElementById("first");
    var secondCount = document.getElementById("second");
    var thirdCount = document.getElementById("third");
    var fourthCount = document.getElementById("fourth");
    
    var firstCheck = true, secondCheck = true, thirdCheck = true, fourthCheck = true;
    
    window.addEventListener('scroll', function() {
      var i = 0;
      if (isInViewport(firstCount) && !firstInterval && firstCheck) { 
        firstInterval = setInterval(() => {
          firstCount.innerText = i;
          if (i >= 8000) {
            clearInterval(firstInterval);
            firstCheck = false;
          }
          i += 100;
        }, 20);
      }
      var x = 0;
      if (isInViewport(secondCount) && !secondInterval && secondCheck) { 
        secondInterval = setInterval(() => {
          secondCount.innerText = x;
          if (x >= 810) {
            clearInterval(secondInterval);
            secondCheck = false;
          }
          x += 10;
        }, 20);
      }
      var y = 0;
      if (isInViewport(thirdCount) && !thirdInterval && thirdCheck) { 
        thirdInterval = setInterval(() => {
          secondCount.innerText = y;
          if (y >= 2000) {
            clearInterval(thirdCheck);
            valid3 = false;
          }
          y += 20;
        }, 20);
      }
      var z = 0;
      if (isInViewport(fourthCount) && !fourthInterval && fourthCheck) { 
        fourthInterval = setInterval(() => {
          thirdCount.innerText = z;
          if (z >= 20) {
            clearInterval(fourthInterval);
            fourthCheck = false;
          }
          z += 1;
        }, 10);
      }
    });
    

    
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items : 2,
    margin :20,
    nav : true ,
    navText: ['<i class="fa-solid fa-arrow-left  text-center mt-5  rounded-start-pill px-4 m-0 me-5 border border-1 border-primary py-2 bg-primary text-white "></i>', '<i class="fa-solid fa-arrow-right rounded-end-pill px-4 py-2 m-0 border border-1 border-primary bg-primary text-white"></i>'],
  }
  );
});

// ============================ContactPage========================




// function nameCheck() {
//     var inputValue = input.value.trim()
//     if (inputValue.lengh < 3) {
//         input.nextElementSibiling.innerText = 'Name Must be More than 4'

//     } else {
//         input.nextElementSibiling.innerText = ''

//     }
// }



// if (document.getElementById("valid")) {
//     var form = document.getElementById("valid")

//     form.addEventListener("input", function (e) {
//         console.log(e.target.value.lengh)
//         if (e.target.id == 'name') nameCheck(e.target)
//         else if (e.target.id == 'email') emailCheck(e.target)
//     })

// }


// function emailCheck() {
    // var emailRegex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
//     var inputValue = input.value
//     emailRegex.test(inputValue)
//     if (emailRegex.test(inputValue)) input.nextElementSibiling.innerText = ''
//     else input.nextElementSibiling.innerText = " inter valid email"
// }

// function passwordCheck(input) {
//     var passRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
//     var inputValue = input.value
//     passRegex.test(inputValue)
//     if (passRegex.test(inputValue)) input.nextElementSibiling.innerText = ''
//     else input.nextElementSibiling.innerText = " Enter at least 1 capital letter & 1 Number "



// }

var name = document.getElementById('name')
var email = document.getElementById('email')
var password = document.getElementById('subject')
var form = document.getElementById('valid')


var nameError = document.getElementById('nameError')
var emailError = document.getElementById('emailError')
var passwordError = document.getElementById('passwordError')


form.addEventListener('submit' , (e)=> {


var emailCheck =/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/


if(name.value === " " || name.value == null){

e.preventDefault()
nameError.innerHTML = "Name is required"

}

if(!email.value.match(emailCheck)){
  e.preventDefault()
  emailError.innerHTML = "valid Emailrequired"

}
if(password.value.length <= 5){

  e.preventDefault()
  nameError.innerHTML = "password must be more than five character"
  
  }
if(password.value.length >= 20){

  e.preventDefault()
  nameError.innerHTML = "password must be less than 20 character"
  
  }










})



































