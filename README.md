# 🎬 유투브 영상을 추가한 OTT 서비스
<a><img src="https://github.com/user-attachments/assets/c180227d-556f-4e0b-b15a-99f7aadc61fd" width="1444" alt="main" /></a>

<br>

## ❓ 프로젝트 소개

- OTT사이트에 들어가서 콘텐츠를 고르다가 시청을 포기한 경험으로 인해 기획하게 되었습니다.
- 해당하는 콘텐츠의 YouTube 리뷰 영상을 첨부해 선택에 도움을 주려고 했습니다.

<br>

## 💻 개발 환경

- 기술 스택 : JavaScript, TypeScript, React, Next.js
- 버전 관리 : GitHub

<br>

## 📅 프로젝트 일정

- 전체 프로젝트 일정 : 2024-09-23 ~
- UI 설계 : 2024-09-23
- 기능 구현 : 2024-09-24 ~ 

<br>

## 💻 구현 사항

### 메인 페이지(시작화면)
<img src="https://github.com/user-attachments/assets/1807d5b1-1bd9-4e22-acbe-85af2cb6cb0a" alt="main"/>

<br>

- 보드게임 검색을 할 수 있는 페이지입니다.
- '인원별/장르별보드게임 찾기'를 Click하면 검색 페이지로 이동합니다.

<br>

### 검색 페이지
<img  src="https://github.com/user-attachments/assets/d0d74a43-f40c-4255-97c9-018c672592dc" alt="search"/>
<span><img width="45%" src="https://github.com/user-attachments/assets/0526618b-00f1-4269-a029-9aa2e1c0f85c" alt="search_person"/></span>
<span><img width="45%" src="https://github.com/user-attachments/assets/fea869c3-90b7-4212-b5f7-7493b761a3f0" alt="search_level"/></span>

<br>

- 인원 : 게임 인원수 데이터에 포함되는 게임들을 includes 메서드 사용해  filteredGames 배열에 저장
- 난이도 : filteredGames에 있는 게임중에서 filter 메서드를 사용

<br>

### 검색 기능
<img  src="https://github.com/user-attachments/assets/f7f8823a-41ae-497e-b09b-75f0017a5682" alt="search_gif"/>


- 게임 데이터들 중에서 검색한 내용을 포함하고 있는 모든 게임 리스트를 보여주는 filterGames 함수 생성
- 메인 페이지에서 검색한 내용을 검색 페이지에서 URLSearchParams를 이용해 검색 키워드를 추출 후 filterGames 호출


<br>

## 🧯 트러블 슈팅

- 메인 페이지에서 검색한 값을 검색 페이지로 보내는 문제 -> URLSearchParams 이용


<br>

## 🔧 개선 목표

- 필터 조건 중 '장르' 활성화
- 반응형 좀 더 완벽
- GitHub Branch 전략을 Main, Dev, Feat 등으로 구분해서 작업해보기
- 필터 조건을 해제하려면 새로고침 해야하는 문제



