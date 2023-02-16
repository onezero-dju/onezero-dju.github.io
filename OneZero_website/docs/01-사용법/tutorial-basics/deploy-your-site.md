---
sidebar_position: 5
---

# 사이트 배포

<!-- Docusaurus is a **static-site-generator** (also called **[Jamstack](https://jamstack.org/)**). -->
다큐사우러스는 **정적 사이트 생성기**입니다. 이를 **[잼스택](https://jamstack.org/)**이라고도 부릅니다.

<!-- It builds your site as simple **static HTML, JavaScript and CSS files**. -->
이는 단순한 **정적인 HTML, 자바스크립트, 및 CSS 파일들**로 사이트를 만들어냅니다.

<!-- ## Build your site -->
## 사이트 빌드

<!-- Build your site **for production**: -->
**결과** 사이트 빌드:

```bash
npm run build
```

<!-- The static files are generated in the `build` folder. -->
정적인 파일들은 `build` 폴더에 만들어집니다.

<!-- ## Deploy your site -->
## 사이트 배포

<!-- Test your production build locally: -->
빌드를 내 컴퓨터에서 시험해보기:

```bash
npm run serve
```

<!-- The `build` folder is now served at [http://localhost:3000/](http://localhost:3000/). -->
이제 `build` 폴더는 [http://localhost:3000/](http://localhost:3000/)에서 배포됐습니다.

<!-- You can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read the **[Deployment Guide](https://docusaurus.io/docs/deployment)**). -->
이제 `build` 폴더를 **거의 어디서나** 쉽게 배포할 수 있습니다. 그것도 **무료** 내지 아주 적은 비용으로 가능합니다 (**[배포 안내](https://docusaurus.io/ko/docs/deployment)** 읽어보기).