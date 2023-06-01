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
var E = 0; // E 변수 초기값 설정
var I = 0; // I 변수 초기값 설정
var S = 0; // E 변수 초기값 설정
var N = 0; // I 변수 초기값 설정
var T = 0; // E 변수 초기값 설정
var F = 0; // I 변수 초기값 설정
var P = 0; // E 변수 초기값 설정
var J = 0; // I 변수 초기값 설정

function handleChoiceEI(choice, variable) {
    if (choice === 1) {
            E++; // E 변수의 점수를 1 증가
            console.log("선택지 1을 선택했습니다.");
    }
    if (choice === 2) {
            I++; // I 변수의 점수를 1 증가
            console.log("선택지 2를 선택했습니다.");
    }
}
var resultEI = E > I ? 'E' : 'I'; // E와 I 중 더 큰 값을 resultEI에 저장

// HTML에서 resultEI 값을 사용할 수 있도록 설정
window.addEventListener('DOMContentLoaded', function() {
  var resultEIElement = document.getElementById('resultEI');
  if (resultEIElement) {
    resultEIElement.textContent = resultEI;
  }
});



function handleChoiceSN(choice, variable) {
    if (choice === 1) {
            S++; // E 변수의 점수를 1 증가
            console.log("선택지 1을 선택했습니다.");
    }
    if (choice === 2) {
            N++; // I 변수의 점수를 1 증가
            console.log("선택지 2를 선택했습니다.");
    }
}
var resultSN = S > N ? 'S' : 'N'; // E와 I 중 더 큰 값을 resultEI에 저장

// HTML에서 resultEI 값을 사용할 수 있도록 설정
window.addEventListener('DOMContentLoaded', function() {
  var resultEIElement = document.getElementById('resultSN');
  if (resultEIElement) {
    resultEIElement.textContent = resultSN;
  }
});



function handleChoiceTF(choice, variable) {
    if (choice === 1) {
            T++; // E 변수의 점수를 1 증가
            console.log("선택지 1을 선택했습니다.");
    }
    if (choice === 2) {
            F++; // I 변수의 점수를 1 증가
            console.log("선택지 2를 선택했습니다.");
    }
}
var resultTF = T > F ? 'T' : 'F'; // E와 I 중 더 큰 값을 resultEI에 저장

// HTML에서 resultEI 값을 사용할 수 있도록 설정
window.addEventListener('DOMContentLoaded', function() {
  var resultEIElement = document.getElementById('resultTF');
  if (resultEIElement) {
    resultEIElement.textContent = resultTF;
  }
});




function handleChoicePJ(choice, variable) {
    if (choice === 1) {
            P++; // E 변수의 점수를 1 증가
            console.log("선택지 1을 선택했습니다.");
    }
    if (choice === 2) {
            J++; // I 변수의 점수를 1 증가
            console.log("선택지 2를 선택했습니다.");
    }
}
var resultPJ = P > J ? 'P' : 'J'; // E와 I 중 더 큰 값을 resultEI에 저장

// HTML에서 resultEI 값을 사용할 수 있도록 설정
window.addEventListener('DOMContentLoaded', function() {
  var resultEIElement = document.getElementById('resultPJ');
  if (resultEIElement) {
    resultEIElement.textContent = resultPJ;
  }
});
