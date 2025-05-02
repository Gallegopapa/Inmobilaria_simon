  
    const formulario = document.querySelector("form");
    
    formulario.addEventListener("submit", function (e) {
      const campos = formulario.querySelectorAll("input, textarea");
      let formularioValido = true;
  
      campos.forEach((campo) => {
        if (campo.value.trim() === "") {
          formularioValido = false;
          campo.classList.add("error"); 
        } else {
          campo.classList.remove("error");
        }
      });
  });
  