function toggleMode() {
  const body = document.body
  body.classList.toggle("light")

  //  pegar a tag img
  const img = document.querySelector("#profile img")
  //  substituir a img
  if (body.classList.contains("light")) {
    //  se tiver light mode adcionar a imagem light
    img.setAttribute("src", "./assets/avatar-trocado-light.png")
    img.setAttribute(
      "alt",
      "Foto do Killua de óculos escuros comendo usando um garfo"
    )
  } else {
    //  se tiver sem light mode mander a imagem normal
    img.setAttribute("src", "./assets/avatar-trocado.png")
    img.setAttribute("alt", "Foto do Killua comendo usando um garfo")
  }
}
