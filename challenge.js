//Funcao que realiza o calculo
function calculo() {

    // Recebe valores de Input de N e V
    var val_n = document.getElementById("val_n").value;
    var val_v = document.getElementById("val_v").value;        
    
    // Transforma valores em um array
    var dados_convertidos = val_v.split(" ");     
    
    // valida Entradas
    if ((parseInt(val_n)) == dados_convertidos.length) {

        // Realiza menor soma
        array_final_menor = dados_convertidos.sort();
        var menor_soma = 0;
        for (var i = 0; i < array_final_menor.length - 1; i++) {
            menor_soma += parseInt(array_final_menor[i]);
        }       

        // Realiza maior soma
        array_final_maior = dados_convertidos.reverse();
        var maior_soma = 0;
        for (var i = 0; i < array_final_maior.length - 1; i++) {
            maior_soma += parseInt(array_final_maior[i]);
        }

        //Imprime valores
        document.getElementById("entrada").innerHTML = val_n + '<br>' + val_v;
        document.getElementById("saida").innerHTML = menor_soma + " " + maior_soma ;
    
    //Caso as entradas sejam invalidas
    } else {
        document.getElementById('val_n').value="";
        document.getElementById('val_v').value="";
        document.getElementById("entrada").innerHTML = "Valores Indevidos";
        document.getElementById("saida").innerHTML = "Valores Indevidos";
    }
}

//Funcao que limpa os campos
function limpar(){
    document.getElementById('val_n').value="";
    document.getElementById('val_v').value="";
    document.getElementById("entrada").innerHTML = "";
    document.getElementById("saida").innerHTML = "";
}


