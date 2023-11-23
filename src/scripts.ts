
const allImages = document.querySelectorAll('div .loading')
const btnSubmit: HTMLButtonElement | null = document.querySelector('#btn-submit')

function showImages() {
   allImages.forEach(img => {
      img.classList.remove('loading')
   })
}

window.addEventListener('load', () => {
   showImages()
});

function validate(element: HTMLInputElement | HTMLTextAreaElement) {
   if (element.value == '') {
      element.nextElementSibling?.classList.remove('text-muted')
      element.classList.add('invalid')
   } else {
      element.classList.remove('invalid')
      element.nextElementSibling?.classList.add('text-muted')
   }
}

document.addEventListener('blur', function (e: FocusEvent) {
   const target = e.target as HTMLInputElement | HTMLTextAreaElement
   if (target.tagName.toLowerCase() === 'input' || target.tagName.toLowerCase() === 'textarea') {
      validate(target)
   }
}, true);

btnSubmit?.addEventListener('click', function (e) {

   e.preventDefault()

   const inputName: HTMLInputElement | null = document.querySelector('#name')
   const inputEmail: HTMLInputElement | null = document.querySelector('#email')
   const textarea: HTMLTextAreaElement | null = document.querySelector('#msg')

   if (inputEmail && inputName && textarea) {
      validate(inputName)
      validate(inputEmail)
      validate(textarea)

      if (inputEmail.classList.contains('invalid') || inputName.classList.contains('invalid') || textarea.classList.contains('invalid')) {
         return false
      } else {
         btnSubmit.disabled = true
         btnSubmit.innerHTML = 'ENVIANDO...'

         setTimeout(function () {
            btnSubmit.disabled = false
            btnSubmit.innerHTML = 'MENSAGEM ENVIADA!'

            console.log(inputEmail.innerHTML)
         }, 3000)
      }
   }
})

