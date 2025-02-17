
async function getRandomAnime() {
    var respon = await fetch(`https://api.jikan.moe/v4/random/anime`)
    var data = await respon.json()

    return data
}


var img = document.getElementById("img_1")

var button = document.getElementById("btn")

button.addEventListener("click", () => {
    getRandomAnime().then(data => {
        img.src = data.data.images.jpg.image_url;
        console.log(data)
    })

})


