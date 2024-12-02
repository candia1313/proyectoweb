const form = document.querySelector("#productForm");
form.style.border = "2px solid brown";
form.style.padding = "20px";
form.style.borderRadius = "10px"; //Bordes redondeados
form.style.width = "37%";
form.style.margin = "20px auto";
form.style.fontFamily = "Arial, sans-serif";
form.style.backgroundColor= "#f5e6dc"

const inputs = document.querySelectorAll("input, textarea"); //campos de entrada
inputs.forEach(input => { //recorremos y se aplica:
    input.style.width = "100%";
    input.style.padding = "8px";
    input.style.marginBottom = "10px";
    input.style.border = "1px solid #deb4d8";
    input.style.borderRadius = "5px";
});

const button = document.querySelector("#submitBtn");
button.style.backgroundColor = "#b876af";
button.style.color = "white";
button.style.padding = "10px 15px";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.cursor = "pointer";



// Validación de campos y manejo de eventos
button.addEventListener("click", () => {
    const Name = document.getElementById("Name").value; //Obtiene valores de los campos
    const lastName = document.getElementById("lastName").value; 
    const CoreoElec = document.getElementById("CoreoElec").value;
    const Descripcion = document.getElementById("Descripcion").value;
    const errorMessage = document.getElementById("errorMessage"); //Aca verifico si algun campos esta vacio

    if (!Name || !lastName || !CoreoElec || !Descripcion) 
    {
        errorMessage.textContent = "No se estan completando todos ls campos";
        return;
    } 
    else 
    {
        errorMessage.textContent = "";
    }

    console.log("Nombre del Producto:", Name);
    console.log("Precio del Producto:", lastName);
    console.log("Cantidad en Inventario:", CoreoElec);
    console.log("Descripción Breve:", Descripcion);

    alert("Formulario enviado");
});