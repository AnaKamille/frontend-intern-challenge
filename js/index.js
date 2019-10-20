function somahits(){
    let ipt = document.querySelector("#hits");
    let total = data.reduce((total, valor) => total + valor.hits, 0);
    ipt.setAttribute("value",total);
}
somahits();
function writeUrls(){
    let lugar = document.querySelector("section #urls");
    let urls = data;
    let text = "";
    let urlsTop = urls.sort(function(a, b){return b.hits - a.hits});
    for (let i = 0; i < 5; i++) {
        text += `
        <div class="shortUrl">
            <h3>${urlsTop[i].shortUrl}</h3>
            <h4>${urlsTop[i].hits}</h4>
        </div>
        `
    }
    lugar.innerHTML = text;

}
writeUrls();

