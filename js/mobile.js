(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-mobail-open]"),
      closeModalBtn: document.querySelector("[data-mobail-close]"),
      modal: document.querySelector("[data-mobail]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hiden");
      document.body.classList.toggle("no-scroll");
    }
  })();