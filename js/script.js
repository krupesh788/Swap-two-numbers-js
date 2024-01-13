function swapNumber() {

    let Variable1 = parseInt(document.getElementById("variable1").value);


    let Variable2 = parseInt(document.getElementById("variable2").value);



    let temp = Variable1;
    Variable1 = Variable2;
    Variable2 = temp;

    

   document.getElementById('p1').innerHTML = `Before Swap: Variable 1 = ${Variable2}` + ", " + `Variable 2 = ${Variable1}`;

    document.getElementById('p2').innerHTML = `After Swap: Variable 1 = ${Variable1}` + ", " + `ariable 2 = ${Variable2}`;

}
