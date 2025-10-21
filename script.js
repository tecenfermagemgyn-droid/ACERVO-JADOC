// Login
const USER = "FATURAMENTO_SAME";
const PASS = "hugo2025";


document.getElementById("btnLogin")?.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorDiv = document.getElementById("error");

    if(username === USER && password === PASS){
        errorDiv.textContent = "";
        window.location.href = "Formulario.html";
    } else {
        errorDiv.textContent = "Usuário ou senha incorretos!";
    }
});

// Formulário (Exemplo de salvar no localStorage)
document.getElementById("salvarBtn").addEventListener("click",()=>{
  const selecionados = Array.from(checkboxExames.querySelectorAll("input:checked")).map(c=>c.value);
  const registro={
    descricao: descricao.options[descricao.selectedIndex].text,
    tipoExame: selecionados.join(", "),
    info: descricao.value==="PRONTUARIO"
      ? `Seq: ${document.getElementById("seqInicial").value}-${document.getElementById("seqFinal").value}`
      : `${formatarData(document.getElementById("dataInicial").value)} a ${formatarData(document.getElementById("dataFinal").value)}`,
    mes: document.getElementById("mes").value,
    ano: document.getElementById("ano").value,
    responsavel: document.getElementById("responsavel").value,
    tipoCaixa: document.getElementById("tipoCaixa").value,
    qtdCaixas: document.getElementById("qtdCaixas").value,
    dataRetirada: formatarData(document.getElementById("dataRetirada").value),
    responsavelRetirada: document.getElementById("responsavelRetirada").value,
    observacao: document.getElementById("observacao").value
  };
  registros.push(registro);
  localStorage.setItem("registros", JSON.stringify(registros));
  atualizarLista();
  mensagem.textContent="✅ Registro salvo com sucesso!";
  setTimeout(()=>mensagem.textContent="",3000);
  document.getElementById("registroForm").reset();
  checkboxExames.style.display="none";
});