var allImages = document.querySelectorAll('div .loading');
var btnSubmit = document.querySelector('#btn-submit');
function showImages() {
    allImages.forEach(function (img) {
        img.classList.remove('loading');
    });
}
window.addEventListener('load', function () {
    showImages();
});
function validate(element) {
    var _a, _b;
    if (element.value == '') {
        (_a = element.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.remove('text-muted');
        element.classList.add('invalid');
    }
    else {
        element.classList.remove('invalid');
        (_b = element.nextElementSibling) === null || _b === void 0 ? void 0 : _b.classList.add('text-muted');
    }
}
document.addEventListener('blur', function (e) {
    var target = e.target;
    if (target.tagName.toLowerCase() === 'input' || target.tagName.toLowerCase() === 'textarea') {
        validate(target);
    }
}, true);
btnSubmit === null || btnSubmit === void 0 ? void 0 : btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    var inputName = document.querySelector('#name');
    var inputEmail = document.querySelector('#email');
    var textarea = document.querySelector('#msg');
    if (inputEmail && inputName && textarea) {
        validate(inputName);
        validate(inputEmail);
        validate(textarea);
        if (inputEmail.classList.contains('invalid') || inputName.classList.contains('invalid') || textarea.classList.contains('invalid')) {
            return false;
        }
        else {
            btnSubmit.disabled = true;
            btnSubmit.innerHTML = 'ENVIANDO...';
            setTimeout(function () {
                btnSubmit.disabled = false;
                btnSubmit.innerHTML = 'MENSAGEM ENVIADA!';
                console.log(inputEmail.innerHTML);
            }, 3000);
        }
    }
});
