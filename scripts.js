var form = document.querySelector('form');
var input =  document.querySelector('input');
var error_message = document.querySelector('.error-message');
var error_icon = document.querySelector('.error-icon');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = input.value.trim();

    if(!isEmail(inputValue) || inputValue === "") {
        error_message.style.display = 'block';
        error_icon.style.display = 'block';
        form.style.borderColor = 'red';
        return
    }

    error_message.style.display = 'none';
    error_icon.style.display = 'none';

});


function isEmail(inputValue) {
    
    return /^[A-Za-z0-9+_.-]+@(.+)$/.test(inputValue);
}