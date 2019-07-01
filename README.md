# PosangBook Backend

Building Analog PosangBook into Digital Webpage with Graphql-Yoga + Prisma + React and ReactNative

# 주의

JWT 인증방식 세션 서버 저장으로 바꾸기 // JWT 구현 미흡함 (추후 보완예정 / 2019.7.1.)

## Frontend

- [x] index.js
- [x] GlobalStyles, Theme
- [x] Footer
- [x] Header
- [x] Routes
- [x] Header, SearchBar
- [x] Search Container, Presenter
- [x] Search by Name
- [ ] Excel File Upload
- [ ] Allow by Supervisor
- [ ] Allow by Supervisor of Supervisor

## Process

- [ ] 상훈시스템 접속
- [ ] 사용자 등록 및 권한신청(부서명까지 입력)
- [ ] 상훈시스템 접속추천대상자 입력(이름,생년월일,주소, 포상유형(효,군정,환경 등),공적)
- [ ] 상훈시스템 접속포상담당자 승인 => 포상번호 부여
- [ ] 상훈시스템 접속포상담당자 반려 => 포상번호 미 부여

## Search(상훈담당자)

- [x] 이름, 훈격, 소속, 사유, 수여일자(period로 설정), 훈격으로 검사

## Search(일반 담당자)

- [ ] 수여 가능 여부만 Boolean

## Idea

- [ ] 포상번호: 프론트에서 바로 직전 포상번호 value를 가져와서 +1을 해주고 백엔드로 보내준다.
