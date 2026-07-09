document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // Formulário de contato -> redireciona direto pro WhatsApp da Solid
  var WHATSAPP_NUMBER = '551131817582'; // 55 + (11) 3181-7582
  var form = document.getElementById('contactForm');
  var success = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nome = form.querySelector('#nome') ? form.querySelector('#nome').value.trim() : '';
      var telefone = form.querySelector('#telefone') ? form.querySelector('#telefone').value.trim() : '';
      var email = form.querySelector('#email') ? form.querySelector('#email').value.trim() : '';
      var areaSelect = form.querySelector('#area');
      var area = areaSelect ? areaSelect.options[areaSelect.selectedIndex].text : '';
      var mensagem = form.querySelector('#mensagem') ? form.querySelector('#mensagem').value.trim() : '';

      var linhas = [
        'Olá, Grupo Solid Consultoria! Vim pelo site e gostaria de falar com vocês.',
        '',
        'Nome: ' + nome,
        telefone ? ('Telefone: ' + telefone) : null,
        'E-mail: ' + email,
        area ? ('Área de interesse: ' + area) : null,
        '',
        'Mensagem: ' + mensagem
      ].filter(Boolean).join('\n');

      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(linhas);

      if (success) {
        success.classList.add('show');
      }

      window.location.href = url;
    });
  }
});
