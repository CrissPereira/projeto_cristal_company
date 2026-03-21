
function proximaEtapa(etapaAtual) {

    const etapa = document.getElementById("etapa" + etapaAtual);
    const inputs = etapa.querySelectorAll("input, textarea");//pegue todos os inputs desta etapa

    // validação
    for (let input of inputs) {
        if (!input.checkValidity()) {
            input.reportValidity();
            return;
        }
    }

    // troca de etapa
    etapa.style.display = "none";
    document.getElementById("etapa" + (etapaAtual + 1)).style.display = "block";
}
