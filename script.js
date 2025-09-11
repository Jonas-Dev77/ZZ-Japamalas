const SECTIONS = [
  'sobre-texto',
  'galeria-japa',
  'galeria-colar',
  'como-usar-texto',
  'contato-texto',
  'curiosidades-texto',
  'inicio-texto',        // se você tiver uma seção inicio
  'frases-hooponopono',  // se existir
  'faq-container'
];

function esconderTudo() {
  SECTIONS.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}

function mostrarInicio() {
  esconderTudo();
  const el = document.getElementById('inicio-texto');
  if (el) el.style.display = 'block';
}

function mostrarSobre() {
  esconderTudo();
  const el = document.getElementById('sobre-texto');
  if (el) el.style.display = 'block';
}

function mostrarGaleria(id) {
  esconderTudo();
  const el = document.getElementById(id);
  if (el) el.style.display = 'block';
}

function mostrarComoUsar() {
  esconderTudo();
  const el = document.getElementById('como-usar-texto');
  if (el) el.style.display = 'block';
}

function mostrarContato() {
  esconderTudo();
  const el = document.getElementById('contato-texto');
  if (el) el.style.display = 'block';
}

function mostrarCuriosidades() {
  esconderTudo();
  const el = document.getElementById('curiosidades-texto');
  if (el) el.style.display = 'block';
}

function mostrarPeçajaoseu() {
  window.open("https://api.whatsapp.com/send?phone=5551998026699", "_blank");
}

// alterna o FAQ: se fechado, abre (e fecha as outras); se aberto, fecha
function toggleFAQ() {
  const faq = document.getElementById('faq-container');
  if (!faq) return; // se não existir, nada a fazer

  if (faq.style.display === 'block') {
    faq.style.display = 'none';
  } else {
    // abrir o faq -> esconder todo o resto e abrir o faq
    esconderTudo();
    faq.style.display = 'block';
  }
}

// opcional: ao carregar a página, esconda tudo e mostre a seção inicial (se houver)
document.addEventListener('DOMContentLoaded', () => {
  esconderTudo();
  const inicio = document.getElementById('inicio-texto');
  if (inicio) inicio.style.display = 'block';
});

