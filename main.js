    function metodo() {
    let inpXi = document.querySelector('#numberXi');
    let inpError = document.querySelector('#error');
    let xi = parseFloat(inpXi.value);
    let errorAsoluto = parseFloat(inpError.value);
    let table = document.querySelector('#table');
    let error = 100;
    let xi2;
    table.innerHTML = '';

    while (error > errorAsoluto) {
      let xinegative = -xi;
      let división = (Math.exp(xinegative) - xi) / ( - Math.exp(xinegative) - 1);
      xi2 = xi - división;
      error = ((xi2 - xi) / xi2) * 100;
      xi = xi2;

      let row = table.insertRow(-1);
      let xiCol = row.insertCell(0);
      let errorCol = row.insertCell(1);

      xiCol.innerHTML = xi.toFixed(8);
      errorCol.innerHTML = error.toFixed(8);
    }
    

  }
  