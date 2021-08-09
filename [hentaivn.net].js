function downloadAll(i,links){
    console.log(links[i]);
    if(i < imgs.length){
        let xml = new XMLHttpRequest();
        xml.open("GET",links[i]);
        // xml.setRequestHeader('X-CSRFToken', csrftoken);
        xml.responseType = "blob";
        xml.onload = function (e) {
            var blob = e.currentTarget.response;
            var contentDispo = e.currentTarget.getResponseHeader('Content-Disposition');
            // https://stackoverflow.com/a/23054920/
            var fileName = contentDispo.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1];
            saveBlob(blob, fileName);
        }
        xml.send();
        setTimeout(()=>{downloadAll(i+1,links)},500);
    }
}

function saveBlob(blob,fileName){
    window.webkitRequestFileSystem(window.TEMPORARY, 1024 * 1024, function (fs) {
        fs.root.getFile(fileName, { create: true }, function (fileEntry) {
            fileEntry.createWriter(function (fileWriter) {
                fileWriter.addEventListener("writeend", function () {
                    window.location = fileEntry.toURL();
                }, false);
                fileWriter.write(blob, "_blank");
            }, function () { });
        }, function () { });
    }, function () { });

}

imgs = document.querySelectorAll("#image > img")
arr = [];
for(let node of imgs){
    arr.push(node.src)
}
downloadAll(0,arr)