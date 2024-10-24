// Archivo: script.js
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Obtener todos los formularios que necesitan validación
      var forms = document.getElementsByClassName("needs-validation");
      // Validar en cada envío
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
