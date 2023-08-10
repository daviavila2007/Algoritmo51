function maioridade() {
    var maioridade = 0
    var idade1 = Number(document.getElementById("idade1").value)
    var idade2 = Number(document.getElementById("idade2").value)
    var idade3 = Number(document.getElementById("idade3").value)
    var idade4 = Number(document.getElementById("idade4").value)
    var idade5 = Number(document.getElementById("idade5").value)
    var media = ((idade1 + idade2 + idade3 + idade4 + idade5)/5)
    maioridade = Math.max(idade1, idade2, idade3, idade4, idade5);
    document.getElementById("r").innerHTML = maioridade
    document.getElementById("r2").innerHTML = media
}