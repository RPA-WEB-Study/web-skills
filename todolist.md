# 프로젝트에서 해야 할 일

## 이번 프로젝트는 WEB-SKILLS/src/data 안에 있는 .js파일을 번역하는 것을 목표로 합니다.

## index.html을 실행하여 "1부터4번"은 제가 하며 "5부터8번"은 "재환"님이, "9~12번"은 "재호"님이 번역합니다.

## 업무 순서는 다음과 같습니다.

1. 본인 web-skilss 파일 위치로 이동한다.

2. `git pull origin main`으로 원격 저장소의 main을 가져온다.

3. `git branch 본인이름` 본인 이름(성 제외) 영어로 브랜치를 생성한다

4. `git checkout 본인이름`으로 본인 브랜치로 이동

5. ./src/data/수정 할 파일 으로 이동 후 'name', 'text'에 해당하는 부분 번역(파파고 사용)후 저장

6. `git add ./src/data/수정파일이름.js`로 스테이징 영역으로 이동

7. `git commit -m "커밋내용입력"` 커밋 입력

8. `git push origin 본인이름`으로 본인 브랜치에 업로드

9. `git checkout pre`으로 pre로 이동

10. `git merge 본인이름브랜치`로 pre에 병합

11. `git push origin pre`로 원격 저장소에 푸쉬

12. github 에서 'Compare & pull request' 클릭

13. 'main < pre' 설정 후 리퀘스트 남기기

14. 매일 8시에 `pull request` 승인하겠으며, 매일 수업 끝나고 8시 전까지 자율적으로 하시면 됩니다. 8시 이후 리퀘스트 금지

# git flow 전략

![flowimage](./flowimage.png)

- 작업 전 'main' 브랜치에서 파일을 복사 합니다.
- 개인 브런치를 생성해 개인 커밋을 업로드 합니다.(정상 작동 확인 필수)
- 개인 커밋을 pre 브런치에 push 하고 작동을 확인합니다. 정상 작동하면 pre에서 merge 합니다.
- merge 이후에 정상 작동한다면, main브런치에 `pull request` 하고, 에러가나면 `revert`를 합니다.

# 그 외의 정보들

- '2022-10-11' [실습](https://violet-bora-lee.github.io/git-tutorial/#commit)

- `git rebase --interactive` [사용 방법](https://wormwlrm.github.io/2020/09/03/Git-rebase-with-interactive-option.html)
