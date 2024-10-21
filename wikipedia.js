let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");

function createAndAppendSearchResult(result) {
    let {
        title,
        link,
        description
    } = result;
    // 1. Div Container = result-item
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    searchResultsEl.appendChild(resultItemEl);

    // 2. Anchor Title = result-Title
    let resultTitleEl = document.createElement("a");
    resultTitleEl.classList.add("result-title");
    resultTitleEl.textContent = title;
    resultTitleEl.href = link;
    resultTitleEl.target = "_blank";

    resultItemEl.appendChild(resultTitleEl);

    // 3. Title Break
    let titleBreakEl = document.createElement("br");

    resultItemEl.appendChild(titleBreakEl);
    // 4. Anchor Url == result-url
    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.textContent = link;
    urlEl.target = "_blank";

    resultItemEl.appendChild(urlEl);
    // 5. Line brake
    let lineBreakEl = document.createElement("br");

    resultItemEl.appendChild(lineBreakEl);
    // 6. Paragraph Description == line description
    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;

    resultItemEl.appendChild(descriptionEl);
}

function displayResults(searchResults) {
    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }
}

function searchWikipedia(event) {
    if (event.key === "Enter") {
        searchResultsEl.textContent = "";
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                let {
                    search_results
                } = data;
                displayResults(search_results);
            });
    }
}


searchInputEl.addEventListener("keydown", searchWikipedia);