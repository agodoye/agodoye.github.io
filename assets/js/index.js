$(document).ready(function(){
    // TOOLTIPS
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // ALERTAS BOTONES
    $( "#enviarCorreo" ).click(function() {
        alert( "El correo fue enviado correctamente." );
      });

    $( "#AgregarFav" ).click(function() {
        alert( "Receta agregada a favoritos." );
      });

    $( "#botonEnviar" ).click(function() {
        alert( "Bienvenid@! Gracias por suscribirte." );
      });

    // CAMBIO DE COLOR TÍTULOS

    $("#ingredientes").on( "dblclick", function() {
          $(this).css({
            "color":"#373A3C"
          });
        });

    $("#ingredientes").on( "click", function() {
        $(this).css({
            "color":"red"
            });
        });   

    $("#preparacion").on( "click", function() {
        $(this).css({
          "color":"red"
        });
        });
    
    $("#preparacion").on( "dblclick", function() {
        $(this).css({
            "color":"#373A3C"
            });
        });
        
    // OCULTAR INFORMACION RECETAS RELACIONADAS
    $( "#tarjeta1" ).click(function() {
        $( "#ocultar1" ).fadeToggle(100);
    });

    $( "#tarjeta2" ).click(function() {
        $( "#ocultar2" ).fadeToggle(100);
    });

    $( "#tarjeta3" ).click(function() {
        $( "#ocultar3" ).fadeToggle(100);
    });
});