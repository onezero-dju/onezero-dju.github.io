import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/OneZero_website/build/en/blog',
    component: ComponentCreator('/OneZero_website/build/en/blog', '8e8'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/archive',
    component: ComponentCreator('/OneZero_website/build/en/blog/archive', 'c4e'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/first post',
    component: ComponentCreator('/OneZero_website/build/en/blog/first post', 'e89'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/first-blog-post',
    component: ComponentCreator('/OneZero_website/build/en/blog/first-blog-post', '628'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/long-blog-post',
    component: ComponentCreator('/OneZero_website/build/en/blog/long-blog-post', '03c'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/mdx-blog-post',
    component: ComponentCreator('/OneZero_website/build/en/blog/mdx-blog-post', 'e5c'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags', 'c0e'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags/docusaurus',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags/docusaurus', 'eeb'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags/facebook',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags/facebook', '862'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags/greetings',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags/greetings', 'a8f'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags/hello',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags/hello', '31e'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags/hola',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags/hola', '503'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/welcome',
    component: ComponentCreator('/OneZero_website/build/en/blog/welcome', 'a0e'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/markdown-page',
    component: ComponentCreator('/OneZero_website/build/en/markdown-page', '305'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/docs',
    component: ComponentCreator('/OneZero_website/build/en/docs', 'ab7'),
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
        path: '/OneZero_website/build/en/docs/category/wiki',
        component: ComponentCreator('/OneZero_website/build/en/docs/category/wiki', 'eae'),
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
        path: '/OneZero_website/build/en/docs/wiki/App/Flutter/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/wiki/App/Flutter/testTXT', '9e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/wiki/App/React Native/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/wiki/App/React Native/testTXT', '5d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/wiki/Dev Env/Powershell/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/wiki/Dev Env/Powershell/testTXT', 'da7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/wiki/Web/JavaScript/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/wiki/Web/JavaScript/testTXT', '3f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/wiki/Web/React/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/wiki/Web/React/testTXT', '3e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/wiki/wiki-intro',
        component: ComponentCreator('/OneZero_website/build/en/docs/wiki/wiki-intro', 'b4d'),
        exact: true,
        sidebar: "wiki-sidebar"
      }
    ]
  },
  {
    path: '/OneZero_website/build/en/',
    component: ComponentCreator('/OneZero_website/build/en/', '4d4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
