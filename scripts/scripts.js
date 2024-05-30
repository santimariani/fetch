'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const app = document.querySelector("#app");

    const userForm = document.createElement('form');

    const formText = document.createElement('label');
    formText.innerText = "SUBMIT YOUR USERNAME ";

    const userInput = document.createElement('input');
    userInput.type = 'text';
    userInput.name = 'username';

    const submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.innerText = 'SUBMIT';

    userForm.appendChild(formText);
    userForm.appendChild(userInput);
    userForm.appendChild(submitButton);

    app.appendChild(userForm);

    userForm.addEventListener('submit', function (event){
        event.preventDefault();
        const some_user_name = userInput.value;

        fetch(`https://api.github.com/users/${some_user_name}`)
        .then(function (response) {return response.json()
        }).then(function (data) {return data})
    });
    
}); 