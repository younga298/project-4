let list1 = ["푸바오", "나는 메트로폴리탄", "세이노", "마흔에", "아이는", "생각이", "보편의"]

for (let i in list1) {


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: list1[i] },
        headers: { Authorization: "KakaoAK a787dd0a976aed4b35d6d7d50eb2b540" }
    })
        .done(function (msg) {

            // for문 (7개)
            const lis = $('#sellerlist>.bestbooks_box').eq(0).find('li');
      

            lis.eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            lis.eq(i).append("<h3>" + msg.documents[0].title + "</h3>");
            lis.eq(i).append("<h6>" + msg.documents[0].authors + "</h6>");



           
        });
}


let list2 = ["박서함", "떡볶이", "컨셉 수업", "우리가 작별 인사", "작별 인사", "구의증명", "츠루카메 조산원"]

for (let i in list2) {


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: list2[i] },
        headers: { Authorization: "KakaoAK a787dd0a976aed4b35d6d7d50eb2b540" }
    })
        .done(function (msg) {

            // for문 (7개)
            const lis = $('#sellerlist>.bestbooks_box').eq(1).find('li');
      

            lis.eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            lis.eq(i).append("<h3>" + msg.documents[0].title + "</h3>");
            lis.eq(i).append("<h6>" + msg.documents[0].authors + "</h6>");



           
        });
}

let list3 = ["분실물", "기분이 태도가 되지 않게(에스더)", "쇼펜하우어", "세이노의 가르침","60일 완성 무조건 모이는 돈 버는 습관","쓸데 잡학퀴즈", "시작의 기술", ]

for (let i in list3) {


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: list3[i] },
        headers: { Authorization: "KakaoAK a787dd0a976aed4b35d6d7d50eb2b540" }
    })
        .done(function (msg) {

            // for문 (7개)
            const lis = $('#sellerlist>.bestbooks_box').eq(2).find('li');
      

            lis.eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            lis.eq(i).append("<h3>" + msg.documents[0].title + "</h3>");
            lis.eq(i).append("<h6>" + msg.documents[0].authors + "</h6>");


           
        });
}
let list4 = ["이누야샤", "너에게 닿기를 운명의 사람 3(완결)", "소년탐정 김전일 30th 2", "드래곤볼 슈퍼 19", "진격의 거인 후회없는 선택 세트(1-2권", "데스노트 3", "명탐정 코난 103"]

for (let i in list4) {


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: list4[i] },
        headers: { Authorization: "KakaoAK a787dd0a976aed4b35d6d7d50eb2b540" }
    })
        .done(function (msg) {

            // for문 (7개)
            const lis = $('#sellerlist>.bestbooks_box').eq(3).find('li');
      

            lis.eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            lis.eq(i).append("<h3>" + msg.documents[0].title + "</h3>");
            lis.eq(i).append("<h6>" + msg.documents[0].authors + "</h6>");


           
        });
}



let list01 = ["주린이가 가장 알고 싶은 최다질문 TOP 77", "주린이도 술술 읽는 친절한 주식책", "난생 처음 주식 투자", "만화 주식투자 무작정 따라하기", "슈퍼개미의 왕초보 주식수업", "내 인생의 첫 주식 공부", "한 권으로 끝내는 배당주 투자"]

for (let i in list01) {


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: list01[i] },
        headers: { Authorization: "KakaoAK a787dd0a976aed4b35d6d7d50eb2b540" }
    })
        .done(function (msg) {

            // for문 (7개)
            const lis = $('.bestSellerList-wrap>.booklist ul').eq(0).find('li');
      

            lis.eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            lis.eq(i).append("<h3>" + msg.documents[0].title + "</h3>");
            lis.eq(i).append("<h6>" + msg.documents[0].authors + "</h6>");


           
        });
}


let list02 = ["야나두 영어회화", "혼자 공부하는 영어 습관의 힘 : 영어패턴 + 영어회화편", "한국인 화자 시점 영어회화", "사용빈도 1억 영어회화 표현", "나혼자 끝내는 독학 영어 첫걸음", "영어, 이제는 잘할 때도 됐다", "혼자만 알고 싶은 영어책 : 순한 맛"]

for (let i in list02) {


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: list02[i] },
        headers: { Authorization: "KakaoAK a787dd0a976aed4b35d6d7d50eb2b540" }
    })
        .done(function (msg) {

            // for문 (7개)
            const lis = $('.bestSellerList-wrap>.booklist ul').eq(1).find('li');
      

            lis.eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            lis.eq(i).append("<h3>" + msg.documents[0].title + "</h3>");
            lis.eq(i).append("<h6>" + msg.documents[0].authors + "</h6>");


           
        });
}

let list03 = ["인간실격·사양", "이방인", "까라마조프 씨네 형제들 (상)", "변신·시골의사", "데미안", "1984: 에디터스 컬렉션", "동화"]

for (let i in list03) {


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: list03[i] },
        headers: { Authorization: "KakaoAK a787dd0a976aed4b35d6d7d50eb2b540" }
    })
        .done(function (msg) {

            // for문 (7개)
            const lis = $('.bestSellerList-wrap>.booklist ul').eq(2).find('li');
      

            lis.eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            lis.eq(i).append("<h3>" + msg.documents[0].title + "</h3>");
            lis.eq(i).append("<h6>" + msg.documents[0].authors + "</h6>");


       

           
        });
}

let list04 = ["블루체크의 코바늘 손뜨개 수업", "패브릭 손뜨개", "코코지니의 친절한 재봉틀 교실", "로제의 모티브 손뜨개 소품", "까막의 감성 인테리어 손뜨개", "로제의 빈티지 손뜨개", "낭만 가득 프랑스 자수"]

for (let i in list04) {


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: list04[i] },
        headers: { Authorization: "KakaoAK a787dd0a976aed4b35d6d7d50eb2b540" }
    })
        .done(function (msg) {

            // for문 (7개)
            const lis = $('.bestSellerList-wrap>.booklist ul').eq(3).find('li');
      

            lis.eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            lis.eq(i).append("<h3>" + msg.documents[0].title + "</h3>");
            lis.eq(i).append("<h6>" + msg.documents[0].authors + "</h6>");



           
        });
}

let list05 = ["헬스의 정석", "죄수 운동법", "근육저승사자", "불량헬스", "근육이", "근육이 튼튼한", "닥치고 데스런"]

for (let i in list05) {


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: list05[i] },
  
        headers: { Authorization: "KakaoAK a787dd0a976aed4b35d6d7d50eb2b540" }
    })
        .done(function (msg) {

            // for문 (7개)
            const lis = $('.bestSellerList-wrap>.booklist ul').eq(4).find('li');
      

            lis.eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            lis.eq(i).append("<h3>" + msg.documents[0].title + "</h3>");
            lis.eq(i).append("<h6>" + msg.documents[0].authors + "</h6>");



           
        });
}


let list06 = ["인간실격"]

for (let i in list06) {


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: list06[i] },
  
        headers: { Authorization: "KakaoAK a787dd0a976aed4b35d6d7d50eb2b540" }
    })
        .done(function (msg) {         
      

            $('.book').append("<img src='" + msg.documents[0].thumbnail + "'/>");
            $('.textbox').append("<p>" + msg.documents[0].title + "</p>");
            $('.textbox').append("<span>" + msg.documents[0].authors + "</span>");

        });
}