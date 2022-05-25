let search_btn = document.getElementById("search-btn");

search_btn.addEventListener("click", () => {
    let input_search = document.getElementById("input_search");

    if (input_search.style.visibility === "hidden") {
        input_search.style.cssText = "visibility: visible;";
        input_search.style.opacity = "1";
        input_search.focus();
    }
    else {
        input_search.style.cssText = "visibility: hidden";
    }
})
