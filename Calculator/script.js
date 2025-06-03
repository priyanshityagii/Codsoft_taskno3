document.addEventListener('DOMContentLoaded', function () {
    let string = "";
    let memory = ""; // Memory variable
    let inputField = document.querySelector('input');
    let buttons = document.querySelectorAll('.button');

    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            const value = e.target.innerHTML;

            if (value === '=') {
                try {
                    string = eval(string);
                    inputField.value = string;
                } catch (err) {
                    string = "";
                    inputField.value = "Error";
                }
            } else if (value === 'C') {
                string = "";
                inputField.value = string;
            } else if (value === 'M+') {
                memory = inputField.value;
            } else if (value === 'M-') {
                memory = "";
            } else {
                string += value;
                inputField.value = string;
            }
        });
    });
});
