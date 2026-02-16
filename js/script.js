//Projeto Usando JAVASCRIPT

function calcularMelhorPreco() {  //criei uma função com o nome de "calcularMelhorPreco" para ser usada no HTML.
    let precoAlcool = document.getElementById("alcool").value  //declarei uma variável com o nome de "precoAlcool". O getElementById chama o id do HTML
    let precoGasolina = document.getElementById("gasolina").value  //declarei uma variável com o nome de "precoGasolina". O  getElementById chama o id do HTML
    if (precoAlcool != "") {    //De forma "literal", precoAlcool que foi declarado como variável é diferente ou igual a nada.
        if (precoGasolina != "") {   //Mesma coisa aqui.
            let resultado = precoAlcool / precoGasolina   //criei uma variável chamada "resultado" que divide as variáveis precoAlcool e precoGasolina.
            if (resultado >= 0.7) {  //chamei a variável "resultado", significa que peguei a divisão das variáveis precoAlcool e precoGasolina. Caso o resultado seja menor ou igual a 0.7 a gasolina é melhor.
                //alert("Melhor ultilizar gasolina!")
                document.getElementById("resultado").innerHTML = "Melhor ultilizar gasolina"
            } else {  //caso contrário, o ácool é melhor.
                //alert("Melhor ultilizar álcool!")
                document.getElementById("resultado").innerHTML = "Melhor ultilizar álcool"
            }

        } else {
            alert("Digite o preço da gasolina")  //Se for igual a nada ele dispara um alerta, porque o usuário não digitou.
        }

    } else {
        alert("Digite o preço do álcool")    //Se for igual a nada ele dispara um alerta, porque o usuário não digitou.
    }
}

document.getElementById('alcool').addEventListener('keypress', function (event) {
    const permitidos = "0123456789.,";

    if(!permitidos.includes(event.key)){
        event.preventDefault();
        alert('❌ Este campo só aceita números');
    }
})

document.getElementById('gasolina').addEventListener('keypress', function (event) {
    const permitidos = "0123456789.,";

    if(!permitidos.includes(event.key)){
        event.preventDefault();
        alert('❌ Este campo só aceita números');
    }
})