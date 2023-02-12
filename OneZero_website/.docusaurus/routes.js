import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/OneZero_website/build/en/blog',
    component: ComponentCreator('/OneZero_website/build/en/blog', 'f66'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/archive',
    component: ComponentCreator('/OneZero_website/build/en/blog/archive', '0be'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/first post',
    component: ComponentCreator('/OneZero_website/build/en/blog/first post', '57a'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/first-blog-post',
    component: ComponentCreator('/OneZero_website/build/en/blog/first-blog-post', '127'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/long-blog-post',
    component: ComponentCreator('/OneZero_website/build/en/blog/long-blog-post', '3a1'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/mdx-blog-post',
    component: ComponentCreator('/OneZero_website/build/en/blog/mdx-blog-post', 'f2d'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags', 'd6d'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags/docusaurus',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags/docusaurus', '03f'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags/facebook',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags/facebook', 'a67'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags/greetings',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags/greetings', '5e6'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags/hello',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags/hello', '53e'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/tags/hola',
    component: ComponentCreator('/OneZero_website/build/en/blog/tags/hola', '249'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/blog/welcome',
    component: ComponentCreator('/OneZero_website/build/en/blog/welcome', 'd31'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/markdown-page',
    component: ComponentCreator('/OneZero_website/build/en/markdown-page', 'cf8'),
    exact: true
  },
  {
    path: '/OneZero_website/build/en/docs',
    component: ComponentCreator('/OneZero_website/build/en/docs', '8ec'),
    routes: [
      {
        path: '/OneZero_website/build/en/docs/category/troubleshooting',
        component: ComponentCreator('/OneZero_website/build/en/docs/category/troubleshooting', 'b45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/category/tutorial---basics',
        component: ComponentCreator('/OneZero_website/build/en/docs/category/tutorial---basics', 'd74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/category/tutorial---extras',
        component: ComponentCreator('/OneZero_website/build/en/docs/category/tutorial---extras', 'fef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/HOW To Use/tutorial-basics/congratulations',
        component: ComponentCreator('/OneZero_website/build/en/docs/HOW To Use/tutorial-basics/congratulations', '7ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/HOW To Use/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/OneZero_website/build/en/docs/HOW To Use/tutorial-basics/create-a-blog-post', '8ae'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/HOW To Use/tutorial-basics/create-a-document',
        component: ComponentCreator('/OneZero_website/build/en/docs/HOW To Use/tutorial-basics/create-a-document', '4ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/HOW To Use/tutorial-basics/create-a-page',
        component: ComponentCreator('/OneZero_website/build/en/docs/HOW To Use/tutorial-basics/create-a-page', 'b63'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/HOW To Use/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/OneZero_website/build/en/docs/HOW To Use/tutorial-basics/deploy-your-site', '8ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/HOW To Use/tutorial-basics/markdown-features',
        component: ComponentCreator('/OneZero_website/build/en/docs/HOW To Use/tutorial-basics/markdown-features', '5ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/HOW To Use/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/OneZero_website/build/en/docs/HOW To Use/tutorial-extras/manage-docs-versions', '3da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/HOW To Use/tutorial-extras/translate-your-site',
        component: ComponentCreator('/OneZero_website/build/en/docs/HOW To Use/tutorial-extras/translate-your-site', 'd64'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/intro',
        component: ComponentCreator('/OneZero_website/build/en/docs/intro', '5b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/School Lecture/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/School Lecture/testTXT', 'dec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/Trouble Shooting/test',
        component: ComponentCreator('/OneZero_website/build/en/docs/Trouble Shooting/test', 'b67'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/Trouble Shooting/testDoc/test',
        component: ComponentCreator('/OneZero_website/build/en/docs/Trouble Shooting/testDoc/test', 'bba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/Wiki/App/Flutter/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/Wiki/App/Flutter/testTXT', '722'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/Wiki/App/React Native/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/Wiki/App/React Native/testTXT', '057'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/Wiki/Dev Env/Powershell/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/Wiki/Dev Env/Powershell/testTXT', 'bed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/Wiki/Web/JavaScript/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/Wiki/Web/JavaScript/testTXT', '0ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/en/docs/Wiki/Web/React/testTXT',
        component: ComponentCreator('/OneZero_website/build/en/docs/Wiki/Web/React/testTXT', '03f'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/OneZero_website/build/en/',
    component: ComponentCreator('/OneZero_website/build/en/', '5f3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
