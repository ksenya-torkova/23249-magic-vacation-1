export default () => {
  let pageHeader = document.querySelector(`.js-header`);

  window.addEventListener(`load`, () => {
    pageHeader.classList.remove(`page-header--loading`);
  });
};