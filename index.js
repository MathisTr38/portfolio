/* Bouton « retour en haut » : visible après 700 px de défilement.
   Le script est chargé avec `defer` sur toutes les pages et ne plante pas
   si le bouton est absent. */
(() => {
  const button = document.querySelector('.back-to-top');
  if (!button) return;

  const update = () => button.classList.toggle('is-visible', window.scrollY > 700);

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
