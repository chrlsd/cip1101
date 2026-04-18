var borderColors = {
  prelims:  '#bfdbfe',
  midterms: '#bbf7d0',
  finals:   '#fecaca'
};

function toggleSection(id, btn, borderColor) {
  var body    = document.getElementById('body-' + id);
  var chevron = document.getElementById('chevron-' + id);
  var isOpen  = !body.classList.contains('hidden');

  if (isOpen) {
    body.classList.add('hidden');
    chevron.classList.add('closed');
    btn.style.borderBottom = 'none';
  } else {
    body.classList.remove('hidden');
    chevron.classList.remove('closed');
    btn.style.borderBottom = '1px solid ' + (borderColors[id] || borderColor);
  }
}
