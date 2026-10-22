function calcular() {
  let n1 = Number(document.getElementById('nota1').value);
  let n2 = Number(document.getElementById('nota2').value);
  let n3 = Number(document.getElementById('nota3').value);

  let media = (n1 + n2 + n3) / 3;

  document.getElementById('resultado').innerText = "A média é: " + media.toFixed(1);
}
