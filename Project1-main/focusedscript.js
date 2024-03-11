const toggles = document.querySelectorAll(".focusguidetoggle")
const good = document.querySelector("#good")

toggles.forEach(toggle => toggle.addEventListener("change",
    (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    /*can use the DOM to tell if param is checked*/
    if (good.checked) {
        if (good === theClickedOne) {
            alert("The weapon was bought from the flea market!")
        }
    }
}