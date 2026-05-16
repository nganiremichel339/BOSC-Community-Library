 function searchResources() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let items = document.getElementsByClassName("resource-item");

    for (let i = 0; i < items.length; i++) {
        let text = items[i].innerText.toLowerCase();
        items[i].style.display = text.includes(input) ? "" : "none";
    }
}