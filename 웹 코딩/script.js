<!DOCTYPE html>
<html lang="Ko">
<head>
    <link rel="stylesheet" href="style.css">
    <title>MBTI 테스트</title>
    <meta charset="utf-8">
</head>
<body>
    <div id="start-page">
        <h1>MBTI 테스트</h1>
        <ul>
            <li>이정민 : 디자인 담당, 18조 팀장</li>
            <li>정승환 : 자바 스크립트 담당</li>
            <li>허태수 : HTML 담당</li>
        </ul>
        <button onclick="goToNextPage('EI-question-page')">시작하기</button>
    </div>

    <div id="EI-question-page" style="display: none;">
        <ul>
                <li><h1>질문 1.</h1></li>
                <h2>당신은 주로</h2>
                <button><strong>사람들과 잘 섞이는 편이다.</strong></button>
                <button><strong>혼자있는 것을 좋아한다.</strong></button>
        </ul>
        <ul>
                <li><h1>질문 2.</h1></li>
                <h2>당신은 사람들과 대화를 할 때</h2>
                <button><strong>자신의 이야기를 재미있게 펼치는 사람이다.</strong></button> 
                <button><strong>다른사람들의 이야기를 경청하는 사람이다.</strong></button> 
        </ul>
        <ul>
                <li><h1>질문 3.</h1></li>
                <h2>당신은 친구를 사귈 때</h2>
                <button><strong>여러 사람들과 두루두루 친해지는걸 좋아한다.</strong></button> 
                <button><strong>한 사람과 깊은 우정을 쌓는 것을 좋아한다.</strong></button> 
        </ul>
        <ul>
                <li><h1>질문 4.</h1></li>
                <h2>당신은 사람들과 노는동안</h2>
                <button><strong>에너지가 충전되는 느낌이다.</strong></button> 
                <button><strong>에너지가 방전되는 느낌이다.</strong></button> 
        </ul>
        <ul>
                <li><h1>질문 5.</h1></li>
                <h2>친구들과의 약속이 전날 취소되었다. 당신의 기분은?</h2>
                <button><strong>약속이 취소된거에 아쉽다.</strong></button>  
                <button><strong>겉으로는 아쉬워 하지만 속으로는 약속이 취소되어서 기쁘다</strong></button> 
        </ul>
        <button onclick="goToNextPage('SN-question-page')">다음 페이지</button>
    </div>

    <div id="SN-question-page" style="display: none;">
        <ul>
            <li><h1>질문 1.</h1></li>
            <h2>나는 롤러코스터를 탈 때</h2>
            <button><strong>재밌겠다. 바깥쪽 자리에 앉을 걸 그랬나?</strong></button>
            <button><strong>타다가 갑자기 사고가 나면 어떡하지?</strong></button>
        </ul>
        <ul>
                <li><h1>질문 2.</h1></li>
                <h2>나는 요리를 할 때</h2>
                <button><strong>유튜브나 인터넷으로 찾아본 후 그대로 만든다.</strong></button>
                <button><strong>이정도면 되겠지라는 생각에 감으로 때려 넣는다.</strong></button>
        </ul>
        <ul>
                <li><h1>질문 3.</h1></li>
                <h2>나는 비행기를 타면</h2>
                <button><strong>여행 100배 즐기기' 여행책을 정독한다.</strong></button>
                <button><strong>비행기가 추락하는 상상을 한다.</strong></button>
        </ul>
        <ul>
                <li><h1>질문 4.</h1></li>
                <h2>나는 멍을 때릴 때</h2>
                <button><strong>정말 아무 생각도 안한다.</strong></button>
                <button><strong>온갖 상상을 한다.</strong></button>
        </ul>
        <ul>
                <li><h1>질문 5.</h1></li>
                <h2>나는 상사가 일을 시킬 때</h2>
                <button><strong>구체적으로 할 일을 지시해야 편하다.</strong></button>
                <button><strong>방향만 제시해야 능률이 오른다.</strong></button>
        </ul>
        <button onclick="goToPreviousPage('EI-question-page')">이전 페이지</button>
        <button onclick="goToNextPage('TF-question-page')">다음 페이지</button>
    </div>

    <div id="TF-question-page" style="display: none;">
        <ul>
                <li><h1>질문 1.</h1></li>
                <h2>나는 친구가 회사 최종 면접에서 떨어졌을 때</h2>
                <button><strong>"답변을 어떻게 했었는지 말해줄래?" 라고 말한다.</strong></button>
                <button><strong>"속상해도 괜찮아, 다음에 잘하면 되지!" 라고 말한다.</strong></button>
        </ul>
        <ul>
                <li><h1>질문 2.</h1></li>
                <h2>나는 머리를 짧게 자른 친구에게</h2>
                <button><strong>"얼마나 잘랐어? 어디서 잘랐어?" 라고 말한다."</strong></button>
                <button><strong>"무슨 일 있었어?" 라고 말한다.</strong></button>
        </ul>
        <ul>
                <li><h1>질문 3.</h1></li>
                <h2>나는 친구가 우울해서 쇼핑하느라 과소비했다고 했을 때</h2>
                <button><strong>"얼마나 썼는데?" 라고 말한다.</strong></button>
                <button><strong>"왜 우울해? 무슨일 있어?" 라고 말한다.</strong></button>
        </ul>
        <ul>
                <li><h1>질문 4.</h1></li>
                <h2>나는 친구가 교통사고가 났다고 전화하면</h2>
                <button><strong>"보험 불렀어?" 라고 말한다.</strong></button>
                <button><strong>"무슨 일이야? 괜찮아? 크게 다쳤어?" 라고 말한다.</strong></button>
        </ul>
        <ul>
                <li><h1>질문 5.</h1></li>
                <h2>나 너무 슬퍼서 하루종일 집에만 있었어 라는 친구에게</h2>
                <button><strong>"집에서 뭐했는데?" 라고 말한다.</strong></button>
                <button><strong>"무슨일인데? 왜 슬퍼?" 라고 말한다.</strong></button>
        </ul>
        <button onclick="goToPreviousPage('SN-question-page')">이전 페이지</button>
        <button onclick="goToNextPage('PJ-question-page')">다음 페이지</button>
    </div>

    <div id="PJ-question-page" style="display: none;">
        <ul>
                <li><h1>질문 1.</h1></li>
                <h2>당신은 과제를</h2>
                <button><strong>미리미리 계획 세워서한다. 미리 완료 안하면 불안하다</strong></button>
                <button><strong>제출 마감일 하루 전에 시작한다.</strong></button>
        </ul>
        <ul>
                <li><h1>질문 2.</h1></li>
                <h2>당신이 자주 지각하는 친구와 여행을 갔을 때</h2>
                <button><strong>그 친구가 지각을 할 상황도 고려해서 계획을 짠다.</strong></button>
                <button><strong>갑자기 꽂히는 맛집이나 카페로 간다.</strong></button>
        </ul>
        <ul>
                <li><h1>질문 3.</h1></li>
                <h2>약속을 앞 둔 당신</h2>
                <button><strong>1시간 전 부터 미리 준비한다.</strong></button>
                <button><strong>시간이 다되서 준비한다.</strong></button>
        </ul>
        <ul>
                <li><h1>질문 4.</h1></li>
                <h2>당신의 친구가 갑자기 찾아왔을 때</h2>
                <button><strong>갑자기 찾아오면 불편하다.</strong></button>
                <button><strong>그 순간이 재밌거나 끌리면 그냥 좋다.</strong></button>
        </ul>
        <ul>
                <li><h1>질문 5.</h1></li>
                <h2>당신은 공부할 때</h2>
                <button><strong>븐, 시간 단위로 어떤 과목을 얼마나 공부할지 계획한다.</strong></button>
                <button><strong>그날 하고 싶은 공부를 하고싶은 만큼 공부한다.</strong></button>
        </ul>
        <button onclick="goToPreviousPage('TF-question-page')">이전 페이지</button>
        <button onclick="goToNextPage('result-page')">다음 페이지</button>
    </div>

    <div id="result-page" style="display: none;">
        <h1>Result</h1>
        <h2>Description of results</h2>
    </div>

    <script>
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
    </script>
</body>
</html>
