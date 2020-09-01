function downloadAll(i,links){
    if(i < imgs.length){
        let node = document.createElement("a");
        node.setAttribute("href",links[i]);
        node.setAttribute("download","");
        document.body.appendChild(node)
        node.click();
        document.body.removeChild(node)
        console.log(`${i+1}/${links.length}`);
        setTimeout(()=>{downloadAll(i+1,links)},500);
    }
}
let imgs = document.querySelectorAll(".rootContant > img")
let arr = [];
for(let node of imgs){
    arr.push(node.getAttribute("dataurl").replace("imageimages","images"));
}
downloadAll(0,arr)