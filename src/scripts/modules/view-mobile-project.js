import { Modal } from '../classes/Modal';

// Находим все кнопки .portfolio-single-view__grid-item-btn
const projectButton = document.querySelector('.portfolio-mobile-btn');
console.log('hello');
// Находим модальное окно
const projectModal = document.querySelector('.mobile-project-modal'); // Убедитесь, что у вас есть модалка с таким классом

// projectButtons.forEach((button) => {
projectButton.addEventListener('click', () => {
  // Находим ближайший .portfolio-single-view__grid-item-img
  const parentItem = projectButton.closest('.portfolio-single-view__grid-item');
  const projectImg = parentItem.querySelector('[data-mobile-project-img]');
  console.log('projectImg', projectImg);
  if (projectImg) {
    // Получаем путь к картинке из data-атрибута
    const imgSrc = projectImg.dataset.mobileProjectImg;

    // Обновляем содержимое модального окна
    if (projectModal) {
      const modalContent = projectModal.querySelector('.mobile-screen'); // Предполагаемый селектор для содержимого модалки
      if (modalContent) {
        modalContent.innerHTML = `<img src="${imgSrc}" alt="Project Image" style="max-width: 100%; height: auto;">`;
      }

      // Открываем модальное окно
      new Modal(projectModal).show();
    }
  }
});
