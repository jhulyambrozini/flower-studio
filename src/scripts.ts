const elementsLoading = document.querySelectorAll('div .loading')
const btnCatalog: NodeListOf<HTMLButtonElement> | null = document.querySelectorAll('button.catalog-btn')
const btnSubmit: HTMLButtonElement | null = document.querySelector('#btn-submit')
const guirlandaIMG = document.querySelectorAll('#guirlandas img')
const vasosIMG = document.querySelectorAll('#vasos img')

/* validate form */

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

document.addEventListener('blur', function (e: FocusEvent) {
   const target = e.target as HTMLElement
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

/* loading */
function showImages() {
   elementsLoading.forEach(elem => {
      elem.classList.remove('loading')
   })
}

window.addEventListener('load', () => {
   elementsLoading.forEach(() => {
      showImages()
   })
});

btnCatalog.forEach(btn => {
   btn.addEventListener('click', () => {
      let btnTarget = btn.dataset['bsTarget']

      if (btnTarget == '#guirlandas') {
         guirlandaIMG.forEach((img) => {
            if (img instanceof HTMLImageElement) {
               img.addEventListener('load', () => {
                  img.parentElement?.classList.remove('loadingCatalog')
               })
            }
         })
      }

      if (btnTarget == '#vasos') {
         vasosIMG.forEach((img) => {
            if (img instanceof HTMLImageElement) {
               img.addEventListener('load', () => {
                  img.parentElement?.classList.remove('loadingCatalog')
               })
            }
         })
      }

   })
})