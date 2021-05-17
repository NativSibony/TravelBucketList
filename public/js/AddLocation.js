function validateFileType() {
    var file = document.getElementById("fileName");
    var fileName = file.value;
    var imgName = getName(fileName);
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
        console.log(imgName);
    } else {
        clearInputFile(file);
        alert("Only jpg/jpeg and png files are allowed!");
    }
}

function getName(fileName) {
    var split = fileName.split("\\");
    var final = split[split.length - 1].split(".");
    return final[0];
}

function clearInputFile(file) {
    if (file.value) {
        try {
            file.value = ''; //for IE11, latest Chrome/Firefox/Opera...
        } catch (err) {
        }
        if (file.value) { //for IE5 ~ IE10
            var form = document.createElement('form'), ref = file.nextSibling;
            form.appendChild(file);
            form.reset();
            ref.parentNode.insertBefore(file, ref);
        }
    }
}
