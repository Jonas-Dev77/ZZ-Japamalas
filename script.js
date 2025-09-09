function mostrarInicio() {
    document.getElementById('sobre-texto').style.display = 'none';
    document.getElementById('galeria-japa').style.display = 'none';
    document.getElementById('galeria-colar').style.display = 'none';
    document.getElementById('como-usar-texto').style.display = 'none';
    document.getElementById('contato-texto').style.display = 'none';
}

function mostrarSobre() {
    document.getElementById('sobre-texto').style.display = 'block';
    document.getElementById('galeria-japa').style.display = 'none';
    document.getElementById('galeria-colar').style.display = 'none';
    document.getElementById('como-usar-texto').style.display = 'none';
    document.getElementById('contato-texto').style.display = 'none';
}

function mostrarGaleria(id) {
    document.getElementById('sobre-texto').style.display = 'none';
    document.getElementById('galeria-japa').style.display = 'none';
    document.getElementById('galeria-colar').style.display = 'none';
    document.getElementById('como-usar-texto').style.display = 'none';
    document.getElementById('contato-texto').style.display = 'none';
    document.getElementById(id).style.display = 'block';
}

function mostrarComoUsar() {
    document.getElementById('sobre-texto').style.display = 'none';
    document.getElementById('galeria-japa').style.display = 'none';
    document.getElementById('galeria-colar').style.display = 'none';
    document.getElementById('como-usar-texto').style.display = 'block';
    document.getElementById('contato-texto').style.display = 'none';
}

function mostrarContato() {
    document.getElementById('sobre-texto').style.display = 'none';
    document.getElementById('galeria-japa').style.display = 'none';
    document.getElementById('galeria-colar').style.display = 'none';
    document.getElementById('como-usar-texto').style.display = 'none';
    document.getElementById('contato-texto').style.display = 'block';
}
