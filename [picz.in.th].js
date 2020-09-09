let imgs = document.querySelectorAll("div.list-item-image.fixed-size > a > img");
let arr = [];
for(let node of imgs){
    let url = node.src.replace(".md","");
    chrome.runtime.sendMessage({download: url}, function(response) {
        
    });
}
