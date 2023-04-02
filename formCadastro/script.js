let x = document.getElementById('login');
let y = document.getElementById('register');
let z = document.getElementById('btn');

function login() {
    x.style.left = '27px';
    y.style.left = '-350px';
    z.style.left = '0px';
}

function register() {
    x.style.left = '350px';
    y.style.left = '25px';
    z.style.left = '150px';
}

function myLogPassword() {
    const a = document.getElementById('logPassword');
    const b = document.getElementById('eye');
    const c = document.getElementById('eye-slash');

    if (a.type === 'password') {
        a.type = 'text';
        b.style.opacity = '0';
        c.style.opacity = '1';
    } else {
        a.type = 'password';
        b.style.opacity = '1';
        c.style.opacity = '0';
    }
}
function myResPassword() {
    const a = document.getElementById('regPassword');
    const b = document.getElementById('eye-2');
    const c = document.getElementById('eye-slash-2');

    if (a.type === 'password') {
        a.type = 'text';
        b.style.opacity = '0';
        c.style.opacity = '1';
    } else {
        a.type = 'password';
        b.style.opacity = '1';
        c.style.opacity = '0';
    }
}
