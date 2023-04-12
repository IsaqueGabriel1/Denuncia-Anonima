const inputFile = document.getElementById("picture__input")
const pictureImage = document.querySelector(".picture__image")
const pictureImageTxt = 'Bota a imagem aqui'
pictureImage.textContent = pictureImageTxt;

inputFile.addEventListener("change", function(e) {
    const inputTarget = e.target
    const file = inputTarget.files[0];
    if(file){
        const reader = new FileReader();

        reader.addEventListener('load', function(e){
            const readerTarget = e.target
            pictureImage.textContent = ""
            const img = document.createElement('img')
            img.src = readerTarget.result
            img.classList.add('picture_img')
            img.style.backgroundSize = "cover"
            pictureImage.appendChild(img)

        })

        reader.readAsDataURL(file)
    }else{
        
    }
})