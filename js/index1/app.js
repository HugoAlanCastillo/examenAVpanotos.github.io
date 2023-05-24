function alternarDestello() {
    var circles = document.querySelectorAll(".circle"); // Obtener todos los elementos con la clase "circle"
    circles.forEach(function(circle) {
      circle.classList.toggle("encendido"); // Alternar la clase "encendido" en cada círculo
    });
  }
  
  setInterval(alternarDestello, 1000); // Cambiar cada 1 segundo (1000 milisegundos)
  


  function alternarDestello2() {
    var circles = document.querySelectorAll(".circleReverse"); // Obtener todos los elementos con la clase "circle"
    circles.forEach(function(circle, index) {
      setTimeout(function() {
        circle.classList.toggle("encendido"); // Alternar la clase "encendido" en cada círculo
      }, index * 1000); // Ajustar el tiempo de inicio para cada círculo en incrementos de 1 segundo (1000 milisegundos)
    });
  }
  
  setInterval(alternarDestello2, 1000); // Cambiar cada 1 segundo (1000 milisegundos)


