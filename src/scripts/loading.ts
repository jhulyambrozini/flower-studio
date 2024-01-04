
  const elementsLoading = document.querySelectorAll('div .loading');
  const btnCatalog: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll('button.catalog-btn');
  const guirlandaIMG: NodeListOf<HTMLImageElement> =
    document.querySelectorAll('#guirlandas img');
  const vasosIMG: NodeListOf<HTMLImageElement> =
    document.querySelectorAll('#vasos img');

  //remove element loading skeleton in interface
  window.addEventListener('load', () => {
    elementsLoading.forEach(() => {
      elementsLoading.forEach(elem => {
        elem.classList.remove('loading');
      });
    });
  });

  // remove catalog loading skeleton
  btnCatalog.forEach(btn => {
    btn.addEventListener('click', () => {
      let btnTarget = btn.dataset['bsTarget'];

      if (btnTarget === '#guirlandas') {
        guirlandaIMG.forEach(img => {
          img.addEventListener('load', () => {
            img.parentElement?.classList.remove('loadingCatalog');
          });
        });
      }

      if (btnTarget === '#vasos') {
        vasosIMG.forEach(img => {
          img.addEventListener('load', () => {
            img.parentElement?.classList.remove('loadingCatalog');
          });
        });
      }
    });
  });
