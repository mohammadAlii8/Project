let myForm = document.querySelector('#myForm');
let userInput = document.querySelector('.todo');
let number = 0

myForm.addEventListener('submit',function () {
    if (userInput.value != '' ) {
        let listItem = document.createElement('li');
        listItem.innerHTML = userInput.value;
        // console.log(userInput)
        let taskList = document.querySelector('#tasks ul');
        taskList.appendChild(listItem);
        userInput.value = '';
        number++
        document.querySelector('#total-count').innerHTML= number;
    }else{
       alert('type something ...');
    }
}) 


// == --> if was equal