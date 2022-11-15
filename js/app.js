const marvel={
    render:()=>{
        const urlAPI='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=cabf0de02de863646fc8046d6e8a3279&hash=9728d9a1be0946d54a3598825407814a';
        const container=document.querySelector('#filita')
        let HTML='';

        fetch(urlAPI)
        .then(res=>res.json())
        .then((json)=>{
            for(const hero of json.data.results){
                let urlSuper=hero.urls[0].url;
                HTML+=`
                <div class="col-md-4">
                    <a href="${urlSuper}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                    </a>
                    <h2 class="title">${hero.name}</h2>
                </div>
            `
            }
            container.innerHTML=HTML
        })


    }
}
marvel.render();