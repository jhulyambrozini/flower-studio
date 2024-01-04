const btnSubmit: HTMLButtonElement | null =
  document.querySelector('#btn-submit');

function handleSubmit(e: MouseEvent) {
  e.preventDefault();

  const inputName: HTMLInputElement | null = document.querySelector('#name');
  const inputEmail: HTMLInputElement | null = document.querySelector('#email');
  const textarea: HTMLTextAreaElement | null = document.querySelector('#msg');

  if (inputEmail && inputName && textarea) {
    validate(inputName);
    validate(inputEmail);
    validate(textarea);

    const invalidEntries =
      inputEmail.classList.contains('invalid') ||
      inputName.classList.contains('invalid') ||
      textarea.classList.contains('invalid');

    if (invalidEntries) throw new Error('Inputs iválidos');

    btnSubmit.disabled = true;
    btnSubmit.innerHTML = 'ENVIANDO...';

    setTimeout(function () {
      btnSubmit.disabled = false;
      btnSubmit.innerHTML = 'MENSAGEM ENVIADA!';

      inputEmail.value = '';
      inputName.value = '';
      textarea.value = '';
    }, 3000);
  }
}

// validate form
function validate(element: HTMLElement) {
  if (
    element instanceof HTMLInputElement ||
    element instanceof HTMLTextAreaElement
  )
    if (element.value == '') {
      element.nextElementSibling?.classList.remove('text-muted');
      element.classList.add('invalid');
    } else {
      element.classList.remove('invalid');
      element.nextElementSibling?.classList.add('text-muted');
    }
}

// validates the field when losing focus
function validateOnBlur(event: FocusEvent) {
  const target = event.target as HTMLElement;
  if (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement
  ) {
    validate(target);
  }
}

document.addEventListener('blur', validateOnBlur, true);
btnSubmit?.addEventListener('click', handleSubmit);
