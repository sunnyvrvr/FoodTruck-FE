# FoodTruck-Fe

<br></br>
Commit Convention

### 브랜치 사용방법

Feat이라는 기능 개발용 브랜치 하나 만들고, 여기에 계속 넣다가
해당 기능 완성되면 develop에 merge 하기

### 파일들 설명

api => api관련된 파일들

assets => 정적인 이미지 파일들

components => 전역적으로 재사용하는 컴포넌트 (ex. button, input)

features => 기능별 재사용할 컴포넌트들

hooks => HOC 혹은 커스텀 훅

pages => 페이지

stores => 전역 상태 관리


---

| 작성 | 설명 |
| --- | --- |
| [FEAT]#이슈번호 내용 | 기능 추가 |
| [FIX]#이슈번호 내용 | 버그 및 오류 수정 |
| [DOCS]#이슈번호 내용 | 문서 수정 |

---

Branch Convention

---
| 작성             | 설명              |
|----------------|-----------------|
| main           | master 브랜치      |
| develop        | main 서브 브랜치     |
| feat/#이슈번호-기능명 | 기능 추가용 feat 브랜치 |
| fix/#이슈번호-브랜치명 | 기능 수정용 fix 브랜치  |
