let metodo = document.getElementById("metodos").value;
if (metodo === "Método regla falsa") {
  document.getElementById("lx0").value = "Ingrese el valor de Xl: ";
  document.getElementById("lx1").value = "Ingrese el valor de Xu: ";
}
      
function metodo() {
    let x0 = parseFloat(document.getElementById("numberX0").value);
    let x1 = parseFloat(document.getElementById("numberX1").value);
    let error = parseFloat(document.getElementById("error").value);
    let metodo = document.getElementById("metodos").value;
    let ecuacion = document.getElementById("ecuaciones").value;
  
    if (metodo === "Método de la secante") {
      
      if (ecuacion === "x3 - x + 3 = 0") {

      }
      
      if(ecuacion === "x3 + 2x2 + 10x - 20 = 0"){

      }else {

      }
    }
    if (metodo === "Método regla falsa") {
     
      if (ecuacion === "x3 - x + 3 = 0") {

      }
      
      if(ecuacion === "x3 + 2x2 + 10x - 20 = 0"){

      }else {
        
      }
    }
  
    if (metodo === "Método de bisección") {
     
      if (ecuacion === "x3 - x + 3 = 0") {

      }
      
      if(ecuacion === "x3 + 2x2 + 10x - 20 = 0"){

      }else {
        
      }
    }
  }
  