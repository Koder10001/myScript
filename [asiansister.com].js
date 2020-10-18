function downloadAll(i,links){
    // if(i < imgs.length){
    //     let node = document.createElement("a");
    //     node.setAttribute("href",links[i]);
    //     node.setAttribute("download","");
    //     document.body.appendChild(node)
    //     node.click();
    //     document.body.removeChild(node)
    //     console.log(`${i+1}/${links.length}`);
    //     setTimeout(()=>{downloadAll(i+1,links)},500);
    // }
    fetch(links, { "headers": { "accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8", "accept-language": "en-US,en;q=0.9", "cache-control": "no-cache", "pragma": "no-cache", "sec-fetch-dest": "image", "sec-fetch-mode": "no-cors", "sec-fetch-site": "cross-site" }, "referrer": "https://hentaivn.net/", "referrerPolicy": "strict-origin-when-cross-origin", "body": null, "method": "GET", "mode": "cors", "credentials": "omit" })
    .then(response => {
        console.log(response);
    })

}
imgs = document.querySelectorAll(".rootContant > img")
arr = [];
for(let node of imgs){
    arr.push(node.getAttribute("dataurl").replace("imageimages","images"));
}
downloadAll(0,arr)
