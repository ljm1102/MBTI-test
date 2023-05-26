function goToNextPage(nextPageId) {
    var currentPage = document.getElementById(getCurrentPageId());
    var nextPage = document.getElementById(nextPageId);
    
    currentPage.style.display = "none";
    nextPage.style.display = "block";
    
    if (nextPageId === "result-page") {
        var nextButton = document.querySelector("#result-page button");
        nextButton.style.display = "none";
    }
}

function goToPreviousPage(previousPageId) {
    var currentPage = document.getElementById(getCurrentPageId());
    var previousPage = document.getElementById(previousPageId);
    
    currentPage.style.display = "none";
    previousPage.style.display = "block";
}

function getCurrentPageId() {
    var pages = ["start-page", "EI-question-page", "SN-question-page", "TF-question-page", "PJ-question-page", "result-page"];
    
    for (var i = 0; i < pages.length; i++) {
        var page = document.getElementById(pages[i]);
        
        if (page.style.display !== "none") {
            return pages[i];
        }
    }
    
    return null;
}
