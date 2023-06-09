var currentPage = document.getElementById("start-page");

function goToNextPage(nextPageId) {
  var nextPage = document.getElementById(nextPageId);
  
  if (nextPageId === "result-page" && nextPage) {
    var nextButton = nextPage.querySelector("button");
    if (nextButton) {
      nextButton.style.display = "none";
    }
  }
  if (nextPageId === "result-page" && ans === "ENFP") {
    nextPageId = "result-ENFP"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }
  if (nextPageId === "result-page" && ans === "ENFJ") {
    nextPageId = "result-ENFJ"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }
  if (nextPageId === "result-page" && ans === "ENTP") {
    nextPageId = "result-ENTP"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }
  if (nextPageId === "result-page" && ans === "ENTJ") {
    nextPageId = "result-ENTJ"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }
  if (nextPageId === "result-page" && ans === "ESFP") {
    nextPageId = "result-ESFP"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }
  if (nextPageId === "result-page" && ans === "ESFJ") {
    nextPageId = "result-ESFJ"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }
  if (nextPageId === "result-page" && ans === "ESTP") {
    nextPageId = "result-ESTP"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }
  if (nextPageId === "result-page" && ans === "ESTJ") {
    nextPageId = "result-ESTJ"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }
  if (nextPageId === "result-page" && ans === "INFP") {
    nextPageId = "result-INFP"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }
  if (nextPageId === "result-page" && ans === "INFJ") {
    nextPageId = "result-INFJ"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }
  if (nextPageId === "result-page" && ans === "INTP") {
    nextPageId = "result-INTP"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }
  if (nextPageId === "result-page" && ans === "INTJ") {
    nextPageId = "result-INTJ"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }
  if (nextPageId === "result-page" && ans === "ISFP") {
    nextPageId = "result-ISFP"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }
  if (nextPageId === "result-page" && ans === "ISFJ") {
    nextPageId = "result-ISFJ"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }
  if (nextPageId === "result-page" && ans === "ISTP") {
    nextPageId = "result-ISTP"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }
  if (nextPageId === "result-page" && ans === "ISTJ") {
    nextPageId = "result-ISTJ"; // Update nextPageId to "result-ENFP"
    nextPage = document.getElementById(nextPageId); // Get the updated next page element
  }


  //--------------------------------------------------------------------------------------------------------
  if (nextPage && currentPage) {
    currentPage.style.display = "none";
    nextPage.style.display = "block";
  }
  
  currentPage = nextPage;
}

function goToPreviousPage(previousPageId) {
  var currentPage = document.getElementById(getCurrentPageId());
  var previousPage = document.getElementById(previousPageId);
  
  if (currentPage) {
    currentPage.style.display = "none";
  }
  if (previousPage) {
    previousPage.style.display = "block";
    currentPage = previousPage;
  }
}

function getCurrentPageId() {
  var pages = ["start-page", "EI-question-page", "SN-question-page", "TF-question-page", "PJ-question-page", "result-page", 
  "result-INTJ","result-INTP","result-ENTJ","result-ENTP",
  "result-INFJ","result-INFP","result-ENFJ","result-ENFP",
  "result-ISTJ","result-ISFJ","result-ESTJ","result-ESFJ",
  "result-ISTP","result-ISFP","result-ESTP","result-ESFP"
];

  for (var i = 0; i < pages.length; i++) {
    var page = document.getElementById(pages[i]);

    if (page && (page.style.display !== "none" || getComputedStyle(page).display !== "none")) {
      return pages[i];
    }
  }

  return null;
}
  var E=1,I=1,S=1,N=1,T=1,F=1,P=1,J=1; 
  var cntEI=1,cntSN=1,cntTF=1,cntPJ=1;
  var resultEI,resultSN,resultTF,resultPJ;
  var progress = 0; 
  var result =""
  let ans=""
  var cnt1=1 ,cnt2=1, cnt3=1,cnt4=1,cnt5=1;
  function handleChoiceEI(choice,value) {
    var progressBar = document.getElementById("progress-bar"); // 게이지 바 요소
    var progressBarContainer = document.querySelector(".progress-bar-container"); // 게이지 바 컨테이너 요소
    
    if (choice == 1 && value == 'e1') {
      E++; 
      I--;
      cnt1 ++;
      if (cntEI==1) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntEI ++ ;
        }        
      }
    else if (choice == 2 && value == 'i1') {
      I++; 
      E--;
      cnt1 ++;
      if (cntEI==1) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntEI ++;
      }
    }
      if (choice == 1 && value == 'e2') {
        E++; 
        I--;
        cnt1 ++;
        if (cntEI==2) {
          progress += 25;
          progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntEI ++ ;
        }
      }
      else if (choice == 2 && value == 'i2') {
        I++; 
        E--;
        cnt1 ++;
        if (cntEI==2) {
          progress += 25;
          progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntEI ++;
        }
      }
      if (choice == 1 && value == 'e3') {
        E++; 
        I--;
        cnt1 ++;
        if (cntEI==3) {
          progress += 25;
          progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntEI ++ ;
        }
      }
      else if (choice == 2 && value == 'i3') {
        I++; 
        E--;
        cnt1 ++;
        if (cntEI==3) {
          progress += 25;
          progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntEI ++;
        }
      }
      if (choice == 1 && value == 'e4') {
        E++; 
        I--;
        cnt1++;
        if (cntEI==4) {
          progress += 25;
          progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntEI ++ ;
        }        
      }
      else if (choice == 2 && value == 'i4') {
        I++; 
        E--;
        cnt1 ++;
        if (cntEI==4) {
          progress += 25;
          progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntEI ++;
        }
      }
      if (choice == 1 && value == 'e5') {
        E++; 
        I--;
        cnt1 ++;
        if (cntEI==5) {
          progress += 25;
          progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntEI ++ ;
        }        
      }
      else if (choice == 2 && value == 'i5') {
        I++; 
        E--;
        cnt1 ++;
        if (cntEI==5) {
          progress += 25;
          progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntEI ++;
        }
      }
      
      if (E>I){
        resultEI = 'E';
        if (cnt1==6){
          result += resultEI;
        }
        
      }
      else{
        resultEI = 'I';
        if (cnt1==6){
          result += resultEI;
        }
      }

    
  }
  
  // ---------------------------------------------------------------------
  
  
  function handleChoiceSN(choice,value) {
    var progressBar = document.getElementById("progress-bar"); // 게이지 바 요소
    var progressBarContainer = document.querySelector(".progress-bar-container"); // 게이지 바 컨테이너 요소
    
    if (choice == 1 && value == 'S1') {
      S++; 
      N--;
      cnt2++;
      if (cntSN==1) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntSN ++ ;
        }        
      }
    else if (choice == 2 && value == 'N1') {
      N++; 
      S--;
      cnt2++;
      if (cntSN==1) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntSN ++;
      }
    }
    if (choice == 1 && value == 'S2') {
      S++; 
      N--;
      cnt2++;
      if (cntSN==2) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntSN ++ ;
        }        
      }
    else if (choice == 2 && value == 'N2') {
      N++; 
      S--;
      cnt2++;
      if (cntSN==2) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntSN ++;
      }
    }
    if (choice == 1 && value == 'S3') {
      S++; 
      N--;
      cnt2++;
      if (cntSN==3) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntSN ++ ;
        }        
      }
    else if (choice == 2 && value == 'N3') {
      N++; 
      S--;
      cnt2++;
      if (cntSN==3) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntSN ++;
      }
    }
    if (choice == 1 && value == 'S4') {
      S++; 
      N--;
      cnt2++;
      if (cntSN==4) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntSN ++ ;
        }        
      }
    else if (choice == 2 && value == 'N4') {
      N++; 
      S--;
      cnt2++;
      if (cntSN==4) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntSN ++;
      }
    }
    if (choice == 1 && value == 'S5') {
      S++; 
      N--;
      cnt2++;
      if (cntSN==5) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntSN ++ ;
        }        
      }
    else if (choice == 2 && value == 'N5') {
      N++; 
      S--;
      cnt2++;
      if (cntSN==5) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntSN ++;
      }
    }
      
      if (S>N){
        resultSN = 'S';
        if (cnt2==6){
          result += resultSN;
        }
      }
      else{
        resultSN = 'N';
        if (cnt2==6){
          result += resultSN;
        }
      }

  }
  //--------------------------------------------------------
  
  function handleChoiceTF(choice,value) {
    var progressBar = document.getElementById("progress-bar"); // 게이지 바 요소
    var progressBarContainer = document.querySelector(".progress-bar-container"); // 게이지 바 컨테이너 요소
    
    if (choice == 1 && value == 'T1') {
      T++; 
      F--;
      cnt3++;
      if (cntTF==1) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntTF ++ ;
        }        
      }
    else if (choice == 2 && value == 'F1') {
      F++; 
      T--;
      cnt3++;
      if (cntTF==1) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntTF ++;
      }
    }
    if (choice == 1 && value == 'T2') {
      T++; 
      F--;
      cnt3++;
      if (cntTF==2) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntTF ++ ;
        }        
      }
    else if (choice == 2 && value == 'F2') {
      F++; 
      T--;
      cnt3++;
      if (cntTF==2) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntTF ++;
      }
    }
    if (choice == 1 && value == 'T3') {
      T++; 
      F--;
      cnt3++;
      if (cntTF==3) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntTF ++ ;
        }        
      }
    else if (choice == 2 && value == 'F3') {
      F++; 
      T--;
      cnt3++;
      if (cntTF==3) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntTF ++;
      }
    }
    if (choice == 1 && value == 'T4') {
      T++; 
      F--;
      cnt3++;
      if (cntTF==4) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntTF ++ ;
        }        
      }
    else if (choice == 2 && value == 'F4') {
      F++; 
      T--;
      cnt3++;
      if (cntTF==4) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntTF ++;
      }
    }
    if (choice == 1 && value == 'T5') {
      T++; 
      F--;
      cnt3++;
      if (cntTF==5) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntTF ++ ;
        }        
      }
    else if (choice == 2 && value == 'F5') {
      F++; 
      T--;
      cnt3++;
      if (cntTF==5) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntTF ++;
      }
    }
      
      if (T>F){
        resultTF = 'T';
        if (cnt3==6){
          result += resultTF;
        }
      }
      else{
        resultTF = 'F';
        if (cnt3==6){
          result += resultTF;
        }
      }

  }
  //-------------------------------------------------------------
  
  
  
  
  function handleChoicePJ(choice,value) {
    var progressBar = document.getElementById("progress-bar"); // 게이지 바 요소
    var progressBarContainer = document.querySelector(".progress-bar-container"); // 게이지 바 컨테이너 요소
    
    if (choice == 1 && value == 'P1') {
      P++; 
      J--;
      cnt4++;
      if (cntPJ==1) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntPJ ++ ;
        }        
      }
    else if (choice == 2 && value == 'J1') {
      J++; 
      P--;
      cnt4++;
      if (cntPJ==1) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntPJ ++;
      }
    }
    if (choice == 1 && value == 'P2') {
      P++; 
      J--;
      cnt4++;
      if (cntPJ==2) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntPJ ++ ;
        }        
      }
    else if (choice == 2 && value == 'J2') {
      J++; 
      P--;
      cnt4++;
      if (cntPJ==2) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntPJ ++;
      }
    }
    if (choice == 1 && value == 'P3') {
      P++; 
      J--;
      cnt4++;
      if (cntPJ==3) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntPJ ++ ;
        }        
      }
    else if (choice == 2 && value == 'J3') {
      J++; 
      P--;
      cnt4++;
      if (cntPJ==3) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntPJ ++;
      }
    }
    if (choice == 1 && value == 'P4') {
      P++; 
      J--;
      cnt4++;
      if (cntPJ==4) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntPJ ++ ;
        }        
      }
    else if (choice == 2 && value == 'J4') {
      J++; 
      P--;
      cnt4++;
      if (cntPJ==4) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntPJ ++;
      }
    }
    if (choice == 1 && value == 'P5') {
      P++; 
      J--;
      cnt4++;
      if (cntPJ==5) {
        progress += 25;
        progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntPJ ++ ;
        }        
      }
    else if (choice == 2 && value == 'J5') {
      J++; 
      P--;
      cnt4++;
      if (cntPJ==5) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntPJ ++;
      }
    }
      
      if (P>J){
        resultPJ = 'P';
        if (cnt4==6){
          result += resultPJ;
          ans = result;
        }
      }
      else{
        resultPJ = 'J';
        if (cnt4==6){
          result += resultPJ;
          ans = result;
        }
        
      }
  }







