function goToNextPage(nextPageId) {
  var nextPage = document.getElementById(nextPageId);
  if (nextPageId === "explain-page" && nextPage) {
      var nextButton = nextPage.querySelector("button");
      if (nextButton) {
          nextButton.style.display = "none";
      }
  }
  if (nextPage) {
      currentPage.style.display = "none";
      nextPage.style.display = "block";
      currentPage = nextPage;
  }
}
function goToPreviousPage(previousPageId) {
    var currentPage = document.getElementById(getCurrentPageId());
    var previousPage = document.getElementById(previousPageId);
    
    currentPage.style.display = "none";
    previousPage.style.display = "block";
}
var currentPage = document.getElementById("start-page");
function getCurrentPageId() {
  var pages = ["start-page", "EI-question-page", "SN-question-page", "TF-question-page", "PJ-question-page", "result-page", "explain-page"];

  for (var i = 0; i < pages.length; i++) {
      var page = document.getElementById(pages[i]);

      // 스타일을 확인할 때, 스타일이 인라인으로 설정되었는지 또는 클래스를 사용하여 설정되었는지 확인합니다.
      if (page.style.display !== "none" || getComputedStyle(page).display !== "none") {
          return pages[i];
      }
  }

  return null;
}
var E = 1; 
var I = 1; 
var S = 1; 
var N = 1; 
var T = 1; 
var F = 1; 
var P = 1; 
var J = 1; 

var resultEI;

function handleChoiceEI(choice) {
    if (choice == 1) {
      E++; 
      I--;
            
    }
    else if (choice == 2) {
      I++; 
      E--;
    }
    if (E>I){
      resultEI = 'E';
    }
    else{
      resultEI = 'I';
    }
  document.getElementById("EI").textContent = resultEI;
}









function handleChoiceSN(choice, variable) {
    if (choice === 1) {
            S++; 
            N--;
    }
    if (choice === 2) {
            N++; 
            S--;
    }
    var resultSN = 0;
    if (S>N){
      resultSN = 'S';
    }
    else{
      resultSN = 'N';
    }
  document.getElementById('SN').textContent = resultSN;
}



function handleChoiceTF(choice, variable) {
    if (choice === 1) {
            T++; 
            F--;
    }
    if (choice === 2) {
            F++; 
            T--;
    }
    var resultTF = T > F ? 'T' : 'F'; 
    document.getElementById('TF').textContent = resultTF;

}





function handleChoicePJ(choice, variable) {
    if (choice === 1) {
            P++; 
            J--;
    }
    if (choice === 2) {
            J++; 
            P--;
    }
    var resultPJ = P > J ? 'P' : 'J'; 
    document.getElementById('PJ').textContent = resultPJ;
}


