function exchange() {
    let amount = parseInt(document.getElementById("idamount").value);
    let b = parseInt(document.getElementById("id1").value);
    let c = parseInt(document.getElementById("id2").value);
    let result = amount * c / b;
//    alert('Result: ' + result);
    document.getElementById('idResult').innerHTML="Result: "+result;
    document.getElementById('idamount').focus()
}