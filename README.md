# 🎬 유투브 영상을 추가한 OTT 서비스
<a><img src="https://github.com/user-attachments/assets/0ad7b8d4-43e5-4a51-a90b-5fecd7728fb3" width="1444" alt="main" /></a>

<br>

## ❓ 프로젝트 소개

- OTT사이트에 들어가서 콘텐츠를 고르다가 시청을 포기한 경험으로 인해 기획하게 되었습니다.
- 해당하는 콘텐츠의 YouTube 리뷰 영상을 첨부해 콘텐츠 선택에 도움을 주려고 했습니다.

<br>

## 💻 개발 환경

- 기술 스택 : TypeScript, React, Next.js
- 버전 관리 : GitHub

<br>

## 📅 프로젝트 일정

- 전체 프로젝트 일정 : 2024-09-23 ~
- UI 설계 : 2024-09-23
- 기능 구현 : 2024-09-24 ~ 

<br>

## 💻 구현 사항

### 메인페이지 - 메인 슬라이더
<a><img src="https://github.com/user-attachments/assets/fc10c220-06f2-4e91-b606-3d1e2a2077fd" alt="main"/></a>

<br>

- 최신 에피소드, 핫한 컨텐츠들을 Swiper를 이용해 정보를 제공합니다.

<br>

### Swiper Component
<a><img src="https://github.com/user-attachments/assets/85b4940f-d8db-426a-88a4-76359f6c3d9d" alt="search"/></a>

<br>

- 반복해서 사용하는 것을 component화해서 Js map 메서드 이용
  
<br>

### 장르별 페이지
<a><img src="https://github.com/user-attachments/assets/30bf68d5-ffb5-4075-a616-8088f40f5e1a" alt="search_gif"/></a>

- 해당 장르의 모든 카테고리를 하나의 배열로 저장해서 태그 형식으로 나열

<br>

## 🧯 트러블 슈팅

- 페이지 구조를 설정하면서 코드를 여러번 뒤엎음
- 데이터를 하나의 배열로 설정 -> 프론트에서 데이터를 처리하는 과정이 복잡해짐 => 데이터 세분화
- map을 돌리던 중에 unique key값을 부여했는데 문구가 계속 뜸 => map을 돌릴 때 '<></>'제거


<br>

## 🔧 개선 목표

- 프론트 작업 이후 이력서 및 자소서 작성으로 프로젝트 중단
- 추후에 YouTube영상을 가져오는 작업 진행하기
- 콘텐츠 데이터 수집



