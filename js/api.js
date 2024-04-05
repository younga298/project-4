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
      

            $('#book .book').append("<img src='" + msg.documents[0].thumbnail + "'/>");
            $('#book .textbox').append("<p>" + msg.documents[0].title + "</p>");
            $('#book .textbox').append("<span>" + msg.documents[0].authors + "</span>");

        });
}







let list07 = [
    
    "여자의 일생","체호프 단편선","댈러웨이 부인","오 헨리 단편","첫사랑","어둠의 속","싯다르타","모파상 단편","몽테뉴 수상록","알퐁스 도데 단편","베이컨 수필집","인형의 집","리어왕","라쇼몽","프랑켄슈타인","등대로","명상록","가든 파티","투명인간","이선 프롬","허클베리 핀의 모험","지킬 박사와 하이드","팡세","피가로의 결혼","파우스트","야성의 부름","오만과 편견","오셀로","맥베스","차라투스트라","모로 박사의 섬","유토피아","로빈슨 크루소","자기만의 방","월든","폭풍의 언덕","스완네 쪽으로","이솝 우화","젊은 베르테르의 슬픔", "데미안", "박서함", "1984년", "기러기", 
    "인간실격·사양", "이방인", "까라마조프 씨네 형제들 (상)", "변신·시골의사", "데미안", "1984: 에디터스 컬렉션", "동화","젊은 베르테르의 슬픔", "데미안", "박서함", "1984년", "위대한 개츠비", "주홍글씨","블루체크의 코바늘 손뜨개 수업", "패브릭 손뜨개", "코코지니의 친절한 재봉틀 교실", "로제의 모티브 손뜨개 소품", "까막의 감성 인테리어 손뜨개", "로제의 빈티지 손뜨개", "낭만 가득 프랑스 자수","페스트","헬스의 정석", "죄수 운동법", "근육저승사자", "불량헬스", "근육이", "헌신", "닥치고 데스런","젊은 베르테르의 슬픔", "데미안", "박서함", "1984년", "위대한 개츠비", "주홍글씨","분실물", "기분이 태도가 되지 않게(에스더)", "쇼펜하우어", "세이노의 가르침","60일 완성 무조건 모이는 돈 버는 습관","쓸데 잡학퀴즈", "시작의 기술","푸바오", "나는 메트로폴리탄", "마침표", "마흔에", "아이는", "생각이", "보편의","이누야샤", "너에게 닿기를 운명의 사람 3(완결)", "소년탐정 김전일 30th 2", "드래곤볼 슈퍼 19", "진격의 거인 후회없는 선택 세트(1-2권", "데스노트 3", "명탐정 코난 103","시","젊은 베르테르의 슬픔", "데미안", "로맨스", "1984년", "위대한 개츠비", "주홍글씨",]

for (let i in list07) {


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: list07[i] },
  
        headers: { Authorization: "KakaoAK a787dd0a976aed4b35d6d7d50eb2b540" }
    })
        .done(function (msg) {

            // for문 (7개)
            const lis = $('#booktotal ul').eq(0).find('li');
      

            lis.eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            lis.eq(i).append("<h3>" + msg.documents[0].title + "</h3>");
            lis.eq(i).append("<h6>" + msg.documents[0].authors + "</h6>");



           
        });


    $.get('./textfile/intro.txt',function(data){
        $(".open .textbox").html(data)
    })
}


let list08 = ["소크라테스의","위대한 개츠비", "젊은 베르테르의 슬픔", "죄와 벌1", "변신", "날개", "이반 일리치의 죽음","나미야","편의점"]

for (let i in list08) {


    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book",
        data: { query: list08[i] },
  
        headers: { Authorization: "KakaoAK a787dd0a976aed4b35d6d7d50eb2b540" }
    })
        .done(function (msg) {

          
            const lis = $('#user-contain-book .user-contain-book ul').eq(0).find('li');
            lis.eq(i).append("<img src='" + msg.documents[0].thumbnail + "'/>");
            lis.eq(i).append("<h4>" + msg.documents[0].title + "</h4>");
            lis.eq(i).append("<h6>" + msg.documents[0].authors + "</h6>");
       });
      }