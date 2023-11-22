const allImages = document.querySelectorAll('div .loading')
const btnSubmit = document.querySelector('#btn-submit')

function showImages() {
   allImages.forEach(img => {
      img.classList.remove('loading')
   })
}

window.addEventListener('load', () => {
   showImages()
});

function validate(elem) {
   if (elem.val() == '') {

      elem.parent().find('.text-muted').show()

      elem.addClass('invalid')

      return false
   } else {
      elem.parent().find('.text-muted').hide()
      elem.removeClass('invalid')
   }
}

btnSubmit.addEventListener('click', function (e) {

   e.preventDefault()

   const inputName = $('#name')
   const inputEmail = $('#email')

   validate(inputName)
   validate(inputEmail)

   if (inputEmail.hasClass('invalid') || inputName.hasClass('invalid')) {
      return false
   } else {
      btnSubmit.disabled = true
      btnSubmit.innerHTML = 'ENVIANDO...'

      setTimeout(function () {
         btnSubmit.disabled = false
         btnSubmit.innerHTML = 'MENSAGEM ENVIADA!'
      }, 3000)
      $(this).submit()
   }
})

$('body').on('blur', '#name', function () {
   validate($(this))
})

$('body').on('blur', '#email', function () {
   validate($(this))
})

$('body').on('blur', '#msg', function () {
   validate($(this))
})