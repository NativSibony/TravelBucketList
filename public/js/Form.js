const addLocation = document.querySelector("form");
const file = document.getElementById("fileName");
const reader = new FileReader();

addLocation.onsubmit = (e) => {
  let imageID = getName(file.value);
  localStorage.clear();
  //   localStorage.setItem("image", reader.result);
  //   localStorage.setItem("imageID", imageID);
};

function previewFile() {
  var preview = document.getElementById("imgID");
  var file = document.querySelector("input[type=file]").files[0];

  reader.onloadend = function () {
    preview.src = reader.result;
    preview.style.display = "block";
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}

function validateFileType() {
  previewFile();
  var fileName = file.value;
  var idxDot = fileName.lastIndexOf(".") + 1;
  var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
  if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
  } else {
    alert("Only jpg/jpeg and png files are allowed!");
    window.location.reload();
  }
}

function getName(fileName) {
  var split = fileName.split("\\");
  var final = split[split.length - 1].split(".");
  return final[0];
}
