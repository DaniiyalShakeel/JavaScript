function createCard(title, Cname, views, monthsold, duration, thumbnail) {

    let viewStr
    if (views < 1000000) {
        viewStr = views / 1000 + "K";
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }

    else {
        viewStr = 78
    }
    let html = `        <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>       
                     </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${Cname}. ${views}. ${monthsold}</p>
            </div>
        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html









createCard("Yahan kuch bhe lekh doo", "ChannalName", " views  K ya M", "duration", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F719098265489179050%2F&psig=AOvVaw0YkAURVDLJy_QNGEKgONKT&ust=1733651007724000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjD1ravlYoDFQAAAAAdAAAAABAE")