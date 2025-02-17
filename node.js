
async function getRandomAnime() {
    var respon = await fetch(`https://api.jikan.moe/v4/random/anime`)
    var data = await respon.json()

    return data
}


var img = document.getElementById("img_1")

var button = document.getElementById("btn")

var title = document.getElementById("title")

var titleE = document.getElementById("titleE")

var syn = document.getElementById("syno")

button.addEventListener("click", () => {
    getRandomAnime().then(anime => {
        if (anime.data.rating !== "Rx - Hentai"){
            img.src = anime.data.images.jpg.large_image_url;
        } else {
            img.src = "arc3.gif"
    }
         title.innerText = "title: " + anime.data.title;
        if(anime.data.title_english == null){
            titleE.innerText = ""
        } else {

            titleE.innerText = "english title: " + anime.data.title_english;
        }
        syn.innerText = anime.data.synopsis
         
        console.log(anime)
        console.error(anime.data.rating)
    })

})


