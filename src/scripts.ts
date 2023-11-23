const btnSubmit: HTMLButtonElement | null = document.querySelector('#btn-submit')
const elementsLoading = document.querySelectorAll('div .loading')
const btnCatalog: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button.catalog-btn')
const guirlandaIMG: NodeListOf<HTMLImageElement> = document.querySelectorAll('#guirlandas img')
const vasosIMG: NodeListOf<HTMLImageElement> = document.querySelectorAll('#vasos img')

// validate form
function validate(element: HTMLElement) {
   if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)
      if (element.value == '') {
         element.nextElementSibling?.classList.remove('text-muted')
         element.classList.add('invalid')
      } else {
         element.classList.remove('invalid')
         element.nextElementSibling?.classList.add('text-muted')
      }
}

// validates the field when losing focus
document.addEventListener('blur', function (e: FocusEvent) {
   const target = e.target as HTMLElement
   if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
      validate(target)
   }
}, true);

// form submission
btnSubmit?.addEventListener('click', function (e) {

   e.preventDefault()

   const inputName: HTMLInputElement | null = document.querySelector('#name')
   const inputEmail: HTMLInputElement | null = document.querySelector('#email')
   const textarea: HTMLTextAreaElement | null = document.querySelector('#msg')

   if (inputEmail && inputName && textarea) {
      validate(inputName)
      validate(inputEmail)
      validate(textarea)

      const invalidEntries = inputEmail.classList.contains('invalid') || inputName.classList.contains('invalid') || textarea.classList.contains('invalid')

      if (invalidEntries) return

      btnSubmit.disabled = true
      btnSubmit.innerHTML = 'ENVIANDO...'

      setTimeout(function () {
         btnSubmit.disabled = false
         btnSubmit.innerHTML = 'MENSAGEM ENVIADA!'

         inputEmail.value = ''
         inputName.value = ''
         textarea.value = ''
      }, 3000)

   }
})

/* loading */

//remove element loading skeleton in interface
window.addEventListener('load', () => {
   elementsLoading.forEach(() => {
      elementsLoading.forEach(elem => {
         elem.classList.remove('loading')
      })
   })
});

// remove catalog loading skeleton
btnCatalog.forEach(btn => {
   btn.addEventListener('click', () => {
      let btnTarget = btn.dataset['bsTarget']

      if (btnTarget === '#guirlandas') {
         guirlandaIMG.forEach((img) => {
            img.addEventListener('load', () => {
               img.parentElement?.classList.remove('loadingCatalog')
            })
         })
      }

      if (btnTarget === '#vasos') {
         vasosIMG.forEach((img) => {
            img.addEventListener('load', () => {
               img.parentElement?.classList.remove('loadingCatalog')
            })
         })
      }
   })
})