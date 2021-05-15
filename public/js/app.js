// Get the modal
var modal = document.getElementById("myModal");
var modalHeader = document.querySelector(".modal-header");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
    modalHeader.insertAdjacentHTML('beforeend', '<img src="/img/maui.png" alt="">')
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    const img = modalHeader.querySelector("img");
    modalHeader.removeChild(img);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}