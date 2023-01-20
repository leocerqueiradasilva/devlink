function toggleMode() {
    const html = document.documentElement;

    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // }else{
    //     html.classList.add('light')
    // }

    html.classList.toggle('light'); /* Substitui todo o if descrito acima */

    //pergar a tag img
    const img = document.querySelector("#profile img");

    //substituir a imagem
    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/leocs_b.png');
    }else{
        img.setAttribute('src', './assets/leocs_w.png')
    }
}