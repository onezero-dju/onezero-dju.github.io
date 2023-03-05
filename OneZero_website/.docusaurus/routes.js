import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/OneZero_website/build/blog',
    component: ComponentCreator('/OneZero_website/build/blog', '17b'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/archive',
    component: ComponentCreator('/OneZero_website/build/blog/archive', 'de6'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/first post',
    component: ComponentCreator('/OneZero_website/build/blog/first post', '3f9'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/first-blog-post',
    component: ComponentCreator('/OneZero_website/build/blog/first-blog-post', 'f50'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/long-blog-post',
    component: ComponentCreator('/OneZero_website/build/blog/long-blog-post', '842'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/mdx-blog-post',
    component: ComponentCreator('/OneZero_website/build/blog/mdx-blog-post', 'c03'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/tags',
    component: ComponentCreator('/OneZero_website/build/blog/tags', 'ff6'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/tags/docusaurus',
    component: ComponentCreator('/OneZero_website/build/blog/tags/docusaurus', 'eb1'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/tags/facebook',
    component: ComponentCreator('/OneZero_website/build/blog/tags/facebook', 'c19'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/tags/greetings',
    component: ComponentCreator('/OneZero_website/build/blog/tags/greetings', '72a'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/tags/hello',
    component: ComponentCreator('/OneZero_website/build/blog/tags/hello', '976'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/tags/hola',
    component: ComponentCreator('/OneZero_website/build/blog/tags/hola', 'e68'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/welcome',
    component: ComponentCreator('/OneZero_website/build/blog/welcome', '735'),
    exact: true
  },
  {
    path: '/OneZero_website/build/markdown-page',
    component: ComponentCreator('/OneZero_website/build/markdown-page', '39f'),
    exact: true
  },
  {
    path: '/OneZero_website/build/docs',
    component: ComponentCreator('/OneZero_website/build/docs', 'd96'),
    routes: [
      {
        path: '/OneZero_website/build/docs/사용법/tutorial-basics/congratulations',
        component: ComponentCreator('/OneZero_website/build/docs/사용법/tutorial-basics/congratulations', '8ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/사용법/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/OneZero_website/build/docs/사용법/tutorial-basics/create-a-blog-post', '8c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/사용법/tutorial-basics/create-a-document',
        component: ComponentCreator('/OneZero_website/build/docs/사용법/tutorial-basics/create-a-document', '792'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/사용법/tutorial-basics/create-a-page',
        component: ComponentCreator('/OneZero_website/build/docs/사용법/tutorial-basics/create-a-page', '2d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/사용법/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/OneZero_website/build/docs/사용법/tutorial-basics/deploy-your-site', '147'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/사용법/tutorial-basics/markdown-features',
        component: ComponentCreator('/OneZero_website/build/docs/사용법/tutorial-basics/markdown-features', 'c16'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/사용법/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/OneZero_website/build/docs/사용법/tutorial-extras/manage-docs-versions', '9af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/사용법/tutorial-extras/translate-your-site',
        component: ComponentCreator('/OneZero_website/build/docs/사용법/tutorial-extras/translate-your-site', '06d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/학교 과정/testTXT',
        component: ComponentCreator('/OneZero_website/build/docs/학교 과정/testTXT', '1f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/category/문제-해결',
        component: ComponentCreator('/OneZero_website/build/docs/category/문제-해결', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/category/설명서---기본',
        component: ComponentCreator('/OneZero_website/build/docs/category/설명서---기본', 'bfd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/category/설명서---심화',
        component: ComponentCreator('/OneZero_website/build/docs/category/설명서---심화', '27e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/intro',
        component: ComponentCreator('/OneZero_website/build/docs/intro', 'f62'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/Troubleshooting/test',
        component: ComponentCreator('/OneZero_website/build/docs/Troubleshooting/test', '915'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/Troubleshooting/testDoc/test',
        component: ComponentCreator('/OneZero_website/build/docs/Troubleshooting/testDoc/test', 'c3a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/Wiki/App/Flutter/testTXT',
        component: ComponentCreator('/OneZero_website/build/docs/Wiki/App/Flutter/testTXT', '787'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/Wiki/App/React Native/testTXT',
        component: ComponentCreator('/OneZero_website/build/docs/Wiki/App/React Native/testTXT', '07b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/Wiki/Dev Env/Powershell/testTXT',
        component: ComponentCreator('/OneZero_website/build/docs/Wiki/Dev Env/Powershell/testTXT', '2db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/Wiki/Web/JavaScript/testTXT',
        component: ComponentCreator('/OneZero_website/build/docs/Wiki/Web/JavaScript/testTXT', 'e18'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/Wiki/Web/React/testTXT',
        component: ComponentCreator('/OneZero_website/build/docs/Wiki/Web/React/testTXT', 'fb6'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/OneZero_website/build/',
    component: ComponentCreator('/OneZero_website/build/', '9bc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
