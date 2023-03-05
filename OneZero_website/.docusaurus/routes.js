import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/OneZero_website/build/en/blog',
    component: ComponentCreator('/OneZero_website/build/en/blog', '068'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/archive',
    component: ComponentCreator('/OneZero_website/build/en/blog/archive', '040'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/first post',
    component: ComponentCreator('/OneZero_website/build/en/blog/first post', '0c5'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/first-blog-post',
    component: ComponentCreator('/OneZero_website/build/en/blog/first-blog-post', 'bf9'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/long-blog-post',
    component: ComponentCreator('/OneZero_website/build/en/blog/long-blog-post', '8e0'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/mdx-blog-post',
    component: ComponentCreator('/OneZero_website/build/en/blog/mdx-blog-post', '5a5'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags', '9d5'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags/docusaurus',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags/docusaurus', 'bc4'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags/facebook',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags/facebook', 'f9b'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags/greetings',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags/greetings', '688'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags/hello',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags/hello', '732'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags/hola',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags/hola', 'bae'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/welcome',
    component: ComponentCreator('/OneZero_website/build/en/blog/welcome', '427'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/markdown-page',
    component: ComponentCreator('/OneZero_website/build/en/markdown-page', '4c1'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/docs',
    component: ComponentCreator('/OneZero_website/build/en/docs', 'c86'),
    routes: [
      {
        path: '/OneZero_website/build/en/docs/사용법/tutorial-basics/congratulations',
        component: ComponentCreator('/OneZero_website/build/en/docs/사용법/tutorial-basics/congratulations', '8ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/사용법/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/OneZero_website/build/en/docs/사용법/tutorial-basics/create-a-blog-post', '051'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/사용법/tutorial-basics/create-a-document',
        component: ComponentCreator('/OneZero_website/build/en/docs/사용법/tutorial-basics/create-a-document', '878'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/사용법/tutorial-basics/create-a-page',
        component: ComponentCreator('/OneZero_website/build/en/docs/사용법/tutorial-basics/create-a-page', 'c68'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/사용법/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/OneZero_website/build/en/docs/사용법/tutorial-basics/deploy-your-site', '19e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/사용법/tutorial-basics/markdown-features',
        component: ComponentCreator('/OneZero_website/build/en/docs/사용법/tutorial-basics/markdown-features', 'd0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/사용법/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/OneZero_website/build/en/docs/사용법/tutorial-extras/manage-docs-versions', '334'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/사용법/tutorial-extras/translate-your-site',
        component: ComponentCreator('/OneZero_website/build/en/docs/사용법/tutorial-extras/translate-your-site', 'c18'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/학교 과정/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/학교 과정/testTXT', 'fb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/category/문제-해결',
        component: ComponentCreator('/OneZero_website/build/en/docs/category/문제-해결', '3b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/category/설명서---기본',
        component: ComponentCreator('/OneZero_website/build/en/docs/category/설명서---기본', 'e31'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/category/설명서---심화',
        component: ComponentCreator('/OneZero_website/build/en/docs/category/설명서---심화', 'af5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/forDocId',
        component: ComponentCreator('/OneZero_website/build/en/docs/forDocId', 'ff0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/intro',
        component: ComponentCreator('/OneZero_website/build/en/docs/intro', '53f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/Troubleshooting/test',
        component: ComponentCreator('/OneZero_website/build/en/docs/Troubleshooting/test', 'f00'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/Troubleshooting/testDoc/test',
        component: ComponentCreator('/OneZero_website/build/en/docs/Troubleshooting/testDoc/test', '7bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/Wiki/App/Flutter/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/Wiki/App/Flutter/testTXT', 'da8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/Wiki/App/React Native/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/Wiki/App/React Native/testTXT', '211'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/Wiki/Dev Env/Powershell/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/Wiki/Dev Env/Powershell/testTXT', '576'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/Wiki/Web/JavaScript/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/Wiki/Web/JavaScript/testTXT', '490'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/Wiki/Web/React/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/Wiki/Web/React/testTXT', '185'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/OneZero_website/build/en/',
    component: ComponentCreator('/OneZero_website/build/en/', '8ef'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
