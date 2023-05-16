const DataApi = fetch("https://developer.spotify.com/");

DataApi.then(async (responseData)=> {
//console.log(responseData);

    const response = await responseData.json();
    console.log(response[0]);

    try {
        //Récupération des données de l'API

        const albumId = response[0].albumId;
        const id = response[0].id;
        const thumbnailUrl = response[0].thumbnailUrl;
        const title = response[0].title;
        const url = response[0].url;

        console.log(albumId);
        console.log(id);
        console.log(thumbnailUrl);
        console.log(title);
        console.log(url);

        //DOM Affichage textes et photos

        const affichage_albumId = document.querySelector("#albumId");
        const affichage_id = document.querySelector("#id");
        const affichage_thumbnailUrl = document.querySelector("#thumbnailUrl");
        const affichage_title = document.querySelector("#title");
        const affichage_url = document.querySelector("#url");
        const affichage_ImageMusic = document.querySelector("#ImageMusic");

        affichage_albumId.innerHTML = albumId;
        affichage_id.innerHTML = id;
        affichage_thumbnailUrl.innerHTML = thumbnailUrl;
        affichage_title.innerHTML = title;
        affichage_url.innerHTML = url;

        // Affichage Photos

        const ImageMusic_thumbnailUrl = `<a href="${url}" target="_bank"><img src="${thumbnailUrl}"></a>`;

        affichage_ImageMusic.insertAdjacentHTML("afterbegin", ImageMusic_thumbnailUrl);

    } catch (err) {
        console.log(err);
    }
})

.catch((err)=>{
    console.log(err);
});