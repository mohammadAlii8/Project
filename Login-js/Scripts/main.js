// Select input & img Classes
let eyeImg = document.querySelector('.pass-visibility');
let passInput = document.querySelector('.pass-input');

// passInput.addEventListener('keyup', function(){
//     let passInputLength = passInput.value.length;
//   if (passInputLength == 0) {
//       eyeImg.style.display = 'none';
//   }else{
//       eyeImg.style.display = 'inline-block';
//   }
// });

eyeImg.addEventListener('click' , function () {
   let passInputType = passInput.getAttribute('type');
   if (passInputType == 'password') {
    passInput.setAttribute('type' , 'text')
    eyeImg.setAttribute('src' , 'images/visibility-off_3.svg');
   }else{
    passInput.setAttribute('type' , 'password');
    eyeImg.setAttribute('src' , 'images/visibility-on_1.svg');
   }

})













