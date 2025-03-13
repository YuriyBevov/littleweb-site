import { Modal } from '../classes/Modal';

// Находим все кнопки .portfolio-single-view__grid-item-btn
const projectButtons = document.querySelectorAll(
  '.portfolio-single-view__grid-item-btn'
);

if (projectButtons.length) {
  // Находим модальное окно
  const projectModal = document.querySelector('.project-modal'); // Убедитесь, что у вас есть модалка с таким классом

  projectButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Находим ближайший .portfolio-single-view__grid-item-img
      const parentItem = button.closest('.portfolio-single-view__grid-item');
      const projectImg = parentItem.querySelector('[data-project-img]');

      if (projectImg) {
        // Получаем путь к картинке из data-атрибута
        const imgSrc = projectImg.dataset.projectImg;

        // Обновляем содержимое модального окна
        if (projectModal) {
          const modalContent = projectModal.querySelector('.modal-content'); // Предполагаемый селектор для содержимого модалки
          if (modalContent) {
            modalContent.innerHTML = `<img src="${imgSrc}" alt="Project Image" style="max-width: 100%; height: auto;">`;
          }

          // Открываем модальное окно
          new Modal(projectModal).show();
        }
      }
    });
  });
}
