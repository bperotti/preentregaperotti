//Funcion para calcula el valor nuevo del alquiler 

function calcularImpuesto (){
    let anioalq =  prompt("Bienvenido- Elija de las siguientes opciones el año donde comenzó su alquiler \n a)2020 \n b)2021 \n c)2022 \n d)2023").toUpperCase()
    const calcularPorcentaje = (valor, porcentaje) => {
        return (valor * porcentaje) / 100;
      };
    if (anioalq === "A" || anioalq === "B" || anioalq === "C" || anioalq === "D"){
        let valor = parseInt (prompt("Ingrese el valor de tu alquiler inicial"));
        if (anioalq === "A") {
            let porcentaje = 40
            let resultado = calcularPorcentaje(valor, porcentaje);
            alert ("El aumento del alquiler sería de: " + resultado + " pesos")
        }else if(anioalq === "B"){
            let porcentaje = 60
            let resultado = calcularPorcentaje(valor, porcentaje);
            alert("El aumento del alquiler sería de " + resultado + " pesos")
        }else if(anioalq === "C"){
            let porcentaje = 90
            let resultado = calcularPorcentaje(valor, porcentaje);
            alert("El aumento del alquiler sería de " + resultado + " pesos")
        }else if(anioalq === "D"){
            let porcentaje = 0
            let resultado = calcularPorcentaje(valor, porcentaje);
            alert("Este año no te toca aumento todavia ;) ")
        }
    }else{
        alert("Tenes que elegir una de las 4 opciones")
    }
}
calcularImpuesto()
//ciclo
do {
    calcularImpuesto();
    } while (confirm("Queres calcular otro aumento de alquiler de otro año distinto?"));
  
  alert("Gracias por utilizar nuestros servicios");

