function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <= 10 ){
                //criança
                img.setAttribute ('src', 'filles2/bebe homem.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute ('src', 'filles2/jovem homem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute ('src', 'filles2/adultohomem.png')
            } else {
                //idoso
                img.setAttribute ('src', 'filles2/idoso homem.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'

            if (idade >=0 && idade <= 10 ){
                //criança
                img.setAttribute ('src', 'filles2/bebe menina.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute ('src', 'filles2/jovem mulher.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute ('src', 'filles2/adultamulher.png')
            } else {
                //idoso
                img.setAttribute ('src', 'filles2/idosa mulher.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.width = '300px'
        img.style.height = '427px'        
        
    }



}
