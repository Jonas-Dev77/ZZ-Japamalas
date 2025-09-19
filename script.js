const SECTIONS = [
  'sobre-texto',
  'galeria-japa',
  'galeria-colar',
  'como-usar-texto',
  'contato-texto',
  'curiosidades-texto',
  'inicio-texto',
  'frases-hooponopono',
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

  const inicio = document.getElementById('inicio-texto');
  if (inicio) inicio.style.display = 'block';

  const frases = document.getElementById('frases-hooponopono');
  if (frases) frases.style.display = 'block';

  // Voltar para o topo da página
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function mostrarSobre() {
  esconderTudo();
  const el = document.getElementById('sobre-texto');
  if (el) {
    el.style.display = 'block';
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function mostrarGaleria(id) {
  esconderTudo();
  const el = document.getElementById(id);
  if (el) {
    el.style.display = 'flex';
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function mostrarComoUsar() {
  esconderTudo();
  const el = document.getElementById('como-usar-texto');
  if (el) {
    el.style.display = 'block';
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function mostrarContato() {
  esconderTudo();
  const el = document.getElementById('contato-texto');
  if (el) {
    el.style.display = 'block';
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function mostrarCuriosidades() {
  esconderTudo();
  const el = document.getElementById('curiosidades-texto');
  if (el) {
    el.style.display = 'block';
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function mostrarPeçajaoseu() {
  window.open("https://api.whatsapp.com/send?phone=5551998026699", "_blank");
}

// alterna o FAQ
function toggleFAQ() {
  const faq = document.getElementById('faq-container');
  if (!faq) return;

  if (faq.style.display === 'block') {
    faq.style.display = 'none';
  } else {
    esconderTudo();
    faq.style.display = 'block';
    faq.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ao carregar a página, mostra início + frases
document.addEventListener('DOMContentLoaded', () => {
  esconderTudo();

  const inicio = document.getElementById('inicio-texto');
  if (inicio) inicio.style.display = 'block';

  const frases = document.getElementById('frases-hooponopono');
  if (frases) frases.style.display = 'block';

  // Garantir que abre no topo
  window.scrollTo({ top: 0 });
});

