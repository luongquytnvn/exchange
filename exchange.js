function exchange() {
    let amount = parseInt(document.getElementById("idamount").value)
    let a = 23000
    let result = amount/a
//    alert('Result: '+result)
    document.getElementById('idResult').innerHTML="Result: "+result;
}