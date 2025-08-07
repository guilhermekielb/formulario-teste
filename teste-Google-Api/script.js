const scriptURL = 'https://script.google.com/macros/s/AKfycbw2B6TfyoALeg6oEHEIbbCBrd_P9c6HC1u-0hWS7oHsDXSS30z4-dkDHhG7lRaaaZ9p/exec';

document.getElementById('meuFormulario').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = new FormData(this);

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({
      nome: data.get("nome"),
      email: data.get("email")
    })
  }).then(() => {
    alert("Formulário enviado com sucesso!");
    this.reset();
  });
});
