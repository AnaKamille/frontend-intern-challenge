function writeUrls(){
    let lugar = document.querySelector("section #urls");
    let urls = data;
    let text = "";
    for (let i = 0; i < 5; i++) {
        text += `
        <div>
            <h3>${urls[i].shortUrl}</h3>
            <h4>${urls[i].hits}</h4>
        </div>
        `
        console.log(urls[i])
    }
    lugar.innerHTML = text;

}
writeUrls();
