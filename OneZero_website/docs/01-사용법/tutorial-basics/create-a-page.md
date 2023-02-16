---
sidebar_position: 1
---

# 페이지 만들기

<!-- Add **Markdown or React** files to `src/pages` to create a **standalone page**: -->
**standalone 페이지**를 만들기 위해 `src/pages`에 **마크다운 또는 리액트** 파일 추가하기:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

<!-- ## Create your first React Page -->
## 첫 리액트 페이지 만들기

<!-- Create a file at `src/pages/my-react-page.js`: -->
`src/pages/my-react-page.js`에 파일 만들기:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>내 리액트 페이지</h1>
      <p>이건 리액트 페이지예요</p>
    </Layout>
  );
}
```

<!-- A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page). -->
이제 [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page)으로 새로운 페이지에 접속할 수 있습니다.

<!-- ## Create your first Markdown Page -->
## 첫 마크다운 페이지 만들기

<!-- Create a file at `src/pages/my-markdown-page.md`: -->
`src/pages/my-markdown-page.md`에 파일 만들기:

```mdx title="src/pages/my-markdown-page.md"
# 내 마크다운 페이지

이건 마크다운 페이지예요
```

<!-- A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page). -->
이제 [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page)으로 새로운 페이지에 접속할 수 있습니다.
