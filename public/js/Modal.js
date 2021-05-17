fetch('/static/locations.json')
    .then(function (response) {
        return response.json();
    }).then((locations) => {
        runModalApp(locations)
    })

function buildLocationCards(locations) {
    
}

function runModalApp() {
    // Get the modal
    var modal = document.querySelector(".modal");
    var modalHeader = document.querySelector(".modal-header");

    // Get all buttons that opens a modal
    var btns = document.querySelectorAll(".open-modal");

    // Get the Close Button element that closes the modal
    var closeBtn = document.querySelector(".close");

    // When the user clicks the button, open the modal 
    btns.forEach((btn) => {
        const btnID = btn.id;
        btn.onclick = function () {
            modal.style.display = "block";
            modalHeader.insertAdjacentHTML('afterbegin', `<img src="/img/${btnID}.png" alt="">`)
        }
    })

    // When the user clicks on <span> (x), close the modal
    closeBtn.onclick = function () {
        modal.style.display = "none";
        const img = modalHeader.querySelector("img");
        modalHeader.removeChild(img);
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            const img = modalHeader.querySelector("img");
            modalHeader.removeChild(img);
        }
    }
}
