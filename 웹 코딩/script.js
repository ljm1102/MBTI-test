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
  
  
        if (page.style.display !== "none" || getComputedStyle(page).display !== "none") {
            return pages[i];
        }
    }
  
    return null;
  }
  var E=1,I=1,S=1,N=1,T=1,F=1,P=1,J=1; 
  var cntEI=1,cntSN=1,cntTF=1,cntPJ=1;
  var resultEI,resultSN,resutlTF,resutlPJ;
  var progress = 0; 
  function handleChoiceEI(choice,value) {
    var progressBar = document.getElementById("progress-bar"); // 게이지 바 요소
    var progressBarContainer = document.querySelector(".progress-bar-container"); // 게이지 바 컨테이너 요소
    
    if (choice == 1 && value == 'e1') {
      E++; 
      I--;
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
        if (cntEI==5) {
          progress += 25;
          progressBar.style.width = progress + "px";
          progressBarContainer.style.backgroundColor = "lightgreen";
          cntEI ++;
        }
      }
      
      if (E>I){
        resultEI = 'E';
      }
      else{
        resultEI = 'I';
      }
    document.getElementById("EI").textContent = resultEI;
  }
  
  // ---------------------------------------------------------------------
  
  
  function handleChoiceSN(choice,value) {
    var progressBar = document.getElementById("progress-bar"); // 게이지 바 요소
    var progressBarContainer = document.querySelector(".progress-bar-container"); // 게이지 바 컨테이너 요소
    
    if (choice == 1 && value == 'S1') {
      S++; 
      N--;
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
      if (cntSN==5) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntSN ++;
      }
    }
      
      if (S>N){
        resultSN = 'S';
      }
      else{
        resultSN = 'N';
      }
    document.getElementById("SN").textContent = resultSN;
  }
  //--------------------------------------------------------
  
  function handleChoiceTF(choice,value) {
    var progressBar = document.getElementById("progress-bar"); // 게이지 바 요소
    var progressBarContainer = document.querySelector(".progress-bar-container"); // 게이지 바 컨테이너 요소
    
    if (choice == 1 && value == 'T1') {
      T++; 
      F--;
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
      if (cntTF==5) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntTF ++;
      }
    }
      
      if (T>F){
        resultTF = 'T';
      }
      else{
        resultTF = 'F';
      }
    document.getElementById("TF").textContent = resultTF;
  }
  //-------------------------------------------------------------
  
  
  
  
  function handleChoicePJ(choice,value) {
    var progressBar = document.getElementById("progress-bar"); // 게이지 바 요소
    var progressBarContainer = document.querySelector(".progress-bar-container"); // 게이지 바 컨테이너 요소
    
    if (choice == 1 && value == 'P1') {
      P++; 
      J--;
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
      if (cntPJ==5) {
        progress += 25;
        progressBar.style.width = progress + "px";
        progressBarContainer.style.backgroundColor = "lightgreen";
        cntPJ ++;
      }
    }
      
      if (P>J){
        resultPJ = 'P';
      }
      else{
        resultPJ = 'J';
      }
    document.getElementById("PJ").textContent = resultPJ;
  } 





