import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/OneZero_website/build/blog',
    component: ComponentCreator('/OneZero_website/build/blog', '4ec'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/archive',
    component: ComponentCreator('/OneZero_website/build/blog/archive', 'e93'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/first post',
    component: ComponentCreator('/OneZero_website/build/blog/first post', '26a'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/first-blog-post',
    component: ComponentCreator('/OneZero_website/build/blog/first-blog-post', 'd2d'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/long-blog-post',
    component: ComponentCreator('/OneZero_website/build/blog/long-blog-post', '0c1'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/mdx-blog-post',
    component: ComponentCreator('/OneZero_website/build/blog/mdx-blog-post', '098'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/tags',
    component: ComponentCreator('/OneZero_website/build/blog/tags', 'a0c'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/tags/docusaurus',
    component: ComponentCreator('/OneZero_website/build/blog/tags/docusaurus', '15a'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/tags/facebook',
    component: ComponentCreator('/OneZero_website/build/blog/tags/facebook', '7e2'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/tags/greetings',
    component: ComponentCreator('/OneZero_website/build/blog/tags/greetings', 'd41'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/tags/hello',
    component: ComponentCreator('/OneZero_website/build/blog/tags/hello', 'a4d'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/tags/hola',
    component: ComponentCreator('/OneZero_website/build/blog/tags/hola', 'f02'),
    exact: true
  },
  {
    path: '/OneZero_website/build/blog/welcome',
    component: ComponentCreator('/OneZero_website/build/blog/welcome', '8a5'),
    exact: true
  },
  {
    path: '/OneZero_website/build/markdown-page',
    component: ComponentCreator('/OneZero_website/build/markdown-page', 'a9b'),
    exact: true
  },
  {
    path: '/OneZero_website/build/docs',
    component: ComponentCreator('/OneZero_website/build/docs', '12e'),
    routes: [
      {
        path: '/OneZero_website/build/docs/category/troubleshooting',
        component: ComponentCreator('/OneZero_website/build/docs/category/troubleshooting', '9fc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/category/tutorial---basics',
        component: ComponentCreator('/OneZero_website/build/docs/category/tutorial---basics', 'a6c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/category/tutorial---extras',
        component: ComponentCreator('/OneZero_website/build/docs/category/tutorial---extras', '39d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/HOW To Use/tutorial-basics/congratulations',
        component: ComponentCreator('/OneZero_website/build/docs/HOW To Use/tutorial-basics/congratulations', '46f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/HOW To Use/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/OneZero_website/build/docs/HOW To Use/tutorial-basics/create-a-blog-post', '17b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/HOW To Use/tutorial-basics/create-a-document',
        component: ComponentCreator('/OneZero_website/build/docs/HOW To Use/tutorial-basics/create-a-document', '63e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/HOW To Use/tutorial-basics/create-a-page',
        component: ComponentCreator('/OneZero_website/build/docs/HOW To Use/tutorial-basics/create-a-page', '73b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/HOW To Use/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/OneZero_website/build/docs/HOW To Use/tutorial-basics/deploy-your-site', '5b9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/HOW To Use/tutorial-basics/markdown-features',
        component: ComponentCreator('/OneZero_website/build/docs/HOW To Use/tutorial-basics/markdown-features', '17b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/HOW To Use/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/OneZero_website/build/docs/HOW To Use/tutorial-extras/manage-docs-versions', '2bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/HOW To Use/tutorial-extras/translate-your-site',
        component: ComponentCreator('/OneZero_website/build/docs/HOW To Use/tutorial-extras/translate-your-site', '372'),
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
        path: '/OneZero_website/build/docs/School Lecture/testTXT',
        component: ComponentCreator('/OneZero_website/build/docs/School Lecture/testTXT', '409'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/Trouble Shooting/test',
        component: ComponentCreator('/OneZero_website/build/docs/Trouble Shooting/test', '0b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/docs/Trouble Shooting/testDoc/test',
        component: ComponentCreator('/OneZero_website/build/docs/Trouble Shooting/testDoc/test', '2cb'),
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
    component: ComponentCreator('/OneZero_website/build/', '8a7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
