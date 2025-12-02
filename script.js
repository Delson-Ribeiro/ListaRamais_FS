const filtro = document.getElementById('filtro-nome');
const tabela = document.getElementById('lista');

filtro.addEventListener("keyup", () => {
    const nomeFiltro = filtro.value.toLowerCase();

    // Começa do 1 para ignorar o cabeçalho
    for (let i = 1; i < tabela.rows.length; i++) {
        const nome = tabela.rows[i].cells[0].innerText.toLowerCase();
        tabela.rows[i].style.display = nome.includes(nomeFiltro) ? "" : "none";
    }
});
