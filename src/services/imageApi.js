export async function getProgramCover(title, callLetter) {
    const url = `http://cdn-images.online.meo.pt/eemstb/ImageHandler.ashx?evTitle=${title}&chCallLetter=${callLetter}&profile=16_9&width=320`;
    return url; // Retorna o URL da imagem
}