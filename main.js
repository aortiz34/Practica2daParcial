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
      let división = (3*xi + Math.sin(xi) - Math.exp(xi)) / (3 + Math.cos(xi) - Math.exp(xi));
      xi2 = xi - división;
      error = ((xi2 - xi) / xi2) * 100;
      xi = xi2;

      let row = table.insertRow(-1);
      let xiCol = row.insertCell(0);
      let errorCol = row.insertCell(1);

      xiCol.innerHTML = xi.toFixed(4);
      errorCol.innerHTML = error.toFixed(4);
    }
    

  }
  