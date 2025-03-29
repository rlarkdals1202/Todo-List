# 📋 Todo List

**코드잇 스프린트 과제**<br>
할 일 목록을 관리하는 To Do 서비스입니다.
![image](https://github.com/user-attachments/assets/45db0416-e155-4c5f-b2a6-0cfa2fcfd23f)


## 1. 프로젝트 개요
### [ 1 ]. 개발 환경
#### 프론트 엔드 개발 `HTML5, CSS3, TypeScript, React, Next.js, tailwind css`
[![FrontEnd Skill](https://skillicons.dev/icons?i=html,css,ts,react,nextjs,tailwind)](https://skillicons.dev)


#### 버전 관리 `git, github`
[![Version Control](https://skillicons.dev/icons?i=git,github)](https://skillicons.dev)


#### 배포 `Vercel`
[![My Tech Stacks](https://skillicons.dev/icons?i=vercel)](https://skillicons.dev)

<br/>

### [ 2 ]. 시작 가이드
#### 배포된 사이트에 접속
- [https://codeit-todo-list-ten.vercel.app](https://codeit-todo-list-ten.vercel.app/)

<br/>

#### 로컬에서 실행
**\*`pnpm`이 설치되어 있어야 함. `pnpm`설치 명령어: `npm install -g pnpm`**

```bash
git clone https://github.com/rlarkdals1202/Todo-List.git
cd Todo-List
pnpm install
pnpm dev
```
**\*실행하기 전에 루트 폴더에 `.env.local` 파일을 생성한 후, `NEXT_PUBLIC_API_URL` 환경변수를 저장해야 함.**

위 명령어 차례대로 입력 후, http://localhost:3000 에 접속

<br/>

### [ 3 ]. 공용 컴포넌트
재사용성을 위해 아래 2개의 컴포넌트는 공용 컴포넌트로 만들었습니다.

- **`Button`** 컴포넌트 <br/>
  : 추가하기, 삭제하기, 수정 완료 버튼에는 동일한 UI 요소가 사용되므로, **`Button`** 공용 컴포넌트로 만들었습니다.

- **`TodoListItem`** 컴포넌트 <br/>
  : 메인 페이지의 할 일 목록 아이템, 상세 페이지의 할 일 목록 아이템에는 동일한 UI 요소가 사용되므로, **`TodoListItem`** 공용 컴포넌트로 만들었습니다. 

<br/>

## 2. 프로젝트 기능 
### [ 1 ]. 할 일 목록 페이지 ( `/` )
#### 목록 조회
- 로고 버튼을 클릭하면 '/' 페이지로 이동
- 진행 중인 할 일과 완료된 할 일을 나누어 볼 수 있음.
#### 할 일 추가
- 상단 입력창에 할 일 텍스트를 입력하고 추가하기 버튼을 클릭하거나 엔터를 치면 할 일을 새로 생성
#### 할 일 완료
- 진행 중 할 일 항목의 왼쪽 버튼을 클릭하면 체크 표시가 되면서 완료 상태가 됨
- 완료된 할 일 항목의 왼쪽 버튼을 다시 클릭하면 체크 표시가 사라지면서 진행 중 상태가 됨

![화면 기록 2025-03-29 오후 6 25 53](https://github.com/user-attachments/assets/6a5ff7a8-ef94-4cc3-9210-5992d0aa1e05)


<br/>

### [ 2 ]. 할 일 상세 페이지 ( `/items/{itemId}` )
#### 할 일 수정
- 할 일 항목을 클릭한 후, 항목 수정이 가능함.
- 항목 이름을 수정할 수 있음.
- 할 일 상태(진행 / 완료)를 수정할 수 있음.
- 메모를 추가할 수 있음.
- 이미지를 최대 1개 첨부할 수 있음.
  + 이미지 파일 이름은 영어로만 이루어져야 함.
  + 이미지 파일 크기는 5MB 이하여야 함.
- 수정 완료 버튼을 클릭하면 수정 사항이 반영되고, 할 일 목록 페이지(`/`)로 이동

#### 할 일 삭제
- 삭제하기 버튼을 클릭하면 할 일 삭제가 가능하며, 삭제 후 할 일 목록 페이지로 이동

![화면 기록 2025-03-30 오전 2 14 20](https://github.com/user-attachments/assets/9357110f-1bf4-4ca7-9fe2-b68780e0e07c)


<br/>

## 3. 폴더 설명

- **`src/action` 폴더**<br/>
  -> 서버 액션 함수 파일들을 모아놓은 폴더

<br>

- **`src/components` 폴더**<br/>
  -> 공통 컴포넌트, 페이지에서 사용되는 컴포넌트 파일들을 모아놓은 폴더

<br>

- **`src/fonts` 폴더**<br/>
  -> 폰트 파일을 모아놓은 폴더

<br>

- **`src/lib` 폴더**<br/>
  -> 데이터 페칭 함수 파일들을 모아놓은 폴더

<br>

- **`src/types` 폴더**<br/>
  -> 타입 관련 파일들을 모아놓은 폴더

<br>

- **`src/utils` 폴더**<br/>
  -> 유틸 함수 파일들을 모아놓은 폴더
