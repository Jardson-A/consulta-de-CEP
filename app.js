const enderecoUsuario = {
    rua: document.querySelector("#rua"),
    bairro: document.querySelector("#bairro"),
    cidade: document.querySelector("#cidade"),
    estado: document.querySelector("#estado"),
    uf: document.querySelector("#uf"),
    regiao: document.querySelector("#regiao"),
    cep: "06329220",
};

async function consultaCEP(cep) {
  const url = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const resposta = await url.json();
  //variavel do tipo objeto para receber os dados do cep do usuario
  let cepUsuario = {
    logradouro: resposta.logradouro,
    bairro: resposta.bairro,
    cidade: resposta.localidade,
    estado: resposta.estado,
    uf: resposta.uf,
    regiao: resposta.regiao,
   
  };

  enderecoUsuario.rua.innerText = cepUsuario.logradouro;
  enderecoUsuario.bairro.innerText = cepUsuario.bairro;
  enderecoUsuario.cidade.innerText = cepUsuario.cidade;
  enderecoUsuario.estado.innerText = cepUsuario.estado;
  enderecoUsuario.uf.innerText = cepUsuario.uf;
  enderecoUsuario.regiao.innerText = cepUsuario.regiao;

  console.log(cepUsuario);
}
consultaCEP(enderecoUsuario.cep);
