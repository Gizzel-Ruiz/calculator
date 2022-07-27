
function numbers(nums) {
    document.getElementById("display").value += nums
}

function clearNumbers() {
    document.getElementById("display").value = ' '
}

function calculateNummbers() {
    let nums = document.getElementById("display").value
    let display = eval(nums)
    document.getElementById("display").value = display
}

function plusMinus() {
    let nums = document.getElementById("display").value
    let display = eval(nums * -1)
    document.getElementById("display").value = display 
}

function percentage() {
    let nums = document.getElementById("display").value
    let display = eval(nums / 100)
    document.getElementById("display").value = display 
}

function changeButtonColor() {
    const button = document.getElementById('button1');

    button.addEventListener('click', function onClick(event) {
        const btn = document.getElementById('btn');
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        btn.style.backgroundColor = "#" + randomColor;
        btn1.style.backgroundColor = "#" + randomColor;
        btn2.style.backgroundColor = "#" + randomColor;
        btn3.style.backgroundColor = "#" + randomColor;
        btn4.style.backgroundColor = "#" + randomColor;
        btn5.style.backgroundColor = "#" + randomColor;
        btn6.style.backgroundColor = "#" + randomColor;
        btn7.style.backgroundColor = "#" + randomColor;
        btn8.style.backgroundColor = "#" + randomColor;
        btn9.style.backgroundColor = "#" + randomColor;
        btn10.style.backgroundColor = "#" + randomColor;
        btn11.style.backgroundColor = "#" + randomColor;
        btn12.style.backgroundColor = "#" + randomColor;
        btn13.style.backgroundColor = "#" + randomColor;
        btn14.style.backgroundColor = "#" + randomColor;
        btn15.style.backgroundColor = "#" + randomColor;
        btn16.style.backgroundColor = "#" + randomColor;
        btn17.style.backgroundColor = "#" + randomColor;
        btn18.style.backgroundColor = "#" + randomColor;
    });
}

function changeTheme() {
    const body = document.querySelector('body');
    const toggle = document.getElementById('toggle');
    const calculator = document.getElementById('calculator');

    toggle.addEventListener('click', function onClick(event) {
        toggle.classList.toggle('active');
        body.classList.toggle('active');
        calculator.classList.toggle('active');
        btn.classList.toggle('active');
        btn1.classList.toggle('active');
        btn2.classList.toggle('active');
        btn3.classList.toggle('active');
        btn4.classList.toggle('active');
        btn5.classList.toggle('active');
        btn6.classList.toggle('active');
        btn7.classList.toggle('active');
        btn8.classList.toggle('active');
        btn9.classList.toggle('active');
        btn10.classList.toggle('active');
        btn11.classList.toggle('active');
        btn12.classList.toggle('active');
        btn13.classList.toggle('active');
        btn14.classList.toggle('active');
        btn15.classList.toggle('active');
        btn16.classList.toggle('active');
        btn17.classList.toggle('active');
        btn18.classList.toggle('active');
    });

}