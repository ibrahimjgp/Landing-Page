document.addEventListener('DOMContentLoaded' , () => {
//  Menu de Navegacion
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

    // Control Deslizante - Slider
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
      indicators: true,
      heigth: 500,
      duration: 500,
      interval: 3000,
    });
});
