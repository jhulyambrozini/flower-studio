const allImages = document.querySelectorAll('img')

function validate(elem) {
   if (elem.val() == '') {

      console.log('o campo de ' + elem.attr('name') + ' é obrigatório')

      elem.parent().find('.text-muted').show()

      elem.addClass('invalid')

      return false
   } else {
      elem.parent().find('.text-muted').hide()
      elem.removeClass('invalid')
   }
}

function showImages() {
   allImages.forEach(img => {
      img.classList.remove('skeleton')
   })
}

// function showSkeleton() {
//    allImages.forEach(img => {
//       img.classList.add('skeleton')
//       console.log('add')
//    })
// }

// window.addEventListener('loadstart', () => {
//    console.log('A página está começando a carregar.');
//    showSkeleton()
// });

// Evento quando a página está completamente carregada
window.addEventListener('load', () => {
   console.log('A página foi completamente carregada.');
   showImages()
});

$('form').on('submit', function (e) {

   e.preventDefault()

   const inputName = $('#name')
   const inputEmail = $('#email')

   validate(inputName)
   validate(inputEmail)

   if (inputEmail.hasClass('invalid') || inputName.hasClass('invalid')) {
      console.log('verificar campos obrigatórios')
      return false
   } else {
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
