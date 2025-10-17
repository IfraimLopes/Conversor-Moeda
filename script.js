selectEntr = document.getElementById('from')
selectSai = document.getElementById('to')
valor =  document.getElementById('amount')



document.querySelector('.convert-btn').addEventListener('click', async (event) => {
  event.preventDefault();

    Entr = document.getElementById('from').value
    Sai = document.getElementById('to').value
    v =  document.getElementById('amount').value


    if (valor.value.length === 0) {
    window.alert("Por favor, insira um valor!");
    return; // sai da função se não houver valor
  }


  await fetchAPI(Entr, Sai, v)

})

const fetchAPI = async (Entr, Sai, v) => {
  const apiKey = "une9QChOQoO0Mye2znffvSychuKasabh"
  const url = `https://api.currencybeacon.com/v1/convert?api_key=${apiKey}&from=${Entr}&to=${Sai}&amount=${v}`;
 
  const resposta = await fetch(url);
  const dados = await resposta.json()

  
 document.getElementById("result").innerText = dados.value.toFixed(2) +` ${Sai}`;

}


