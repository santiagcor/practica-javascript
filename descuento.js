var cupon1=[10,20,30,40,50,60,70,80,90];
function calcularcond(precio,descuento){
    let pdescuento=100-descuento;
    let preciocon=(precio*pdescuento)/100;
    
    return preciocon;

}

function clickdeboton(){
    let precio=document.getElementById("inputPre");
    let cupon=document.getElementById("cupones");
    let valor1=precio.value;
    let valor2=cupon.value; 

    switch(valor2){
        case "10%": calcularp=calcularcond(valor1,cupon1[0]);
        break; 
        case "20%": calcularp=calcularcond(valor1,cupon1[1]);
        break;
        case "30": calcularp=calcularcond(valor1,cupon1[2]);
        break;
        case "40%": calcularp=calcularcond(valor1,cupon1[3]);
        break;
        case "50%": calcularp=calcularcond(valor1,cupon1[4]);
        break;
        case "60%": calcularp=calcularcond(valor1,cupon1[5]);
        break;
        case "70%": calcularp=calcularcond(valor1,cupon1[6]);
        break;
        case "80%": calcularp=calcularcond(valor1,cupon1[7]);
        break;
        case "90%": calcularp=calcularcond(valor1,cupon1[8]);
        break;
    }
    let resultado=document.getElementById("resultado");
    resultado.innerText = "el precio a pagar es de : $"+ calcularp;

}