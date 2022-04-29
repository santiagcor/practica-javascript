//codigo triangulo
console.group("triangulo");

function perimetrot(lado1,lado2,baset){
    let perimetrotriangulo;
    perimetrotriangulo=(lado1)+(lado2)+(baset);
    return perimetrotriangulo;
}

function areat(base,altura){
    let areatriangulo=(base*altura)/2;
    return areatriangulo;
}

function calcularpert(){
    let input1=document.getElementById("lado1");
    let input2=document.getElementById("lado2");
    let input3=document.getElementById("base");
    let valor1=input1.value;
    let valor2=input2.value;
    let valor3=input3.value;

    let perimetro=perimetrot(valor1,valor2,valor3);
    alert(perimetro);
}

function calcularareat(){
    let input1=document.getElementById("base");
    let input2=document.getElementById("altura");
    let valor1=input1.value;
    let valor2=input2.value;

    let area=areat(valor1,valor2);
    alert(area);
}

