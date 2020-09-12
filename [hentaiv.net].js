let imgs = document.querySelectorAll("#image > img")
let arr = [];
for(let node of imgs){
    let url = node.src;
    chrome.runtime.sendMessage({download: url}, function(response) {
        
    });
}
