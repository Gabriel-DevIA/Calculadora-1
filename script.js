function insert(num) {
  var numero =  document.getElementById('conta').innerHTML;
  document.getElementById('conta').innerHTML = numero + num;

}
function clean() {
    document.getElementById('conta').innerHTML = ""
}
function back() {
    var conta = document.getElementById('conta').innerHTML;
    document.getElementById('conta').innerHTML = conta.substring(0, conta.length -1)
}
function calcular() {
    var conta = document.getElementById('conta').innerHTML;
    if(conta)
    {
        document.getElementById('conta').innerHTML = eval(conta);
    }
    else {
        document.getElementById('conta').innerHTML = "Error";
    }

}