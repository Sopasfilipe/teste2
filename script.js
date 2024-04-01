const textoInput = document.getElementById('texto');
const enviarButton = document.getElementById('enviar');
const respostaDiv = document.getElementById('resposta');

enviarButton.addEventListener('click', async () => {
    const texto = textoInput.value;
    const response = await fetch('https://api.gemini.com/v1/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: texto,
        }),
    });
    const data = await response.json();
    respostaDiv.textContent = data.response;
});
