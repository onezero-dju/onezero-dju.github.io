---
sidebar_position: 2
---

# 도큐멘트 만들기

<!-- Documents are **groups of pages** connected through: -->
도큐멘트는 페이지들의 집합입니다. 이는 다음과 같은 기능들로 묶여있습니다.

<!-- - a **sidebar**
- **previous/next navigation**
- **versioning** -->
- **사이드바**
- **이전/다음**
- **버전 관리**

<!-- ## Create your first Doc -->
## 첫 도큐멘트 만들기

<!-- Create a Markdown file at `docs/hello.md`: -->
`docs/hello.md`에 새로운 마크다운 파일 생성:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

<!-- A new document is now available at [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello). -->
이제 새로운 도큐멘트가 [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello)에 있습니다.

<!-- ## Configure the Sidebar -->
## 사이드바 설정하기

<!-- Docusaurus automatically **creates a sidebar** from the `docs` folder. -->
도큐사우러스는 `docs`폴더로부터 자동으로 **사이드바 생성**을 합니다.

<!-- Add metadata to customize the sidebar label and position: -->
사이드바 각 항목의 표제목과 위치를 정하는 메타데이터 추가: 

```md title="docs/hello.md" {1-4}
---
sidebar_label: '안녕!'
sidebar_position: 3
---

# 안녕

이건 내 **첫 도큐사우러스 도큐멘트**야!
```

<!-- It is also possible to create your sidebar explicitly in `sidebars.js`: -->
`sidebars.js`를 통해 명시적으로 사이드바 생성:

```js title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
