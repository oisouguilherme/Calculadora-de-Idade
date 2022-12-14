function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert ('[erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade <21){
                //Jovem
                img.setAttribute('src', 'adoleshomem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulthomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'velhohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade <21){
                //Jovem
                img.setAttribute('src', 'adolesmulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulheradult.png')
            } else {
                //idoso
                img.setAttribute('src', 'velhomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos.'
        res.appendChild(img)

    }
}