(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[open-modal-btn]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[close-modal-btn]"),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector("[modal-overlay]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();
