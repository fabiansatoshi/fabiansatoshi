const btnSubir = document.getElementById('btnSubir');

btnSubir.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  btnSubir.style.display = window.scrollY > 200 ? 'block' : 'none';
});
