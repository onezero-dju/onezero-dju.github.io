import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/OneZero_website/build/index.html/blog',
    component: ComponentCreator('/OneZero_website/build/index.html/blog', '422'),
    exact: true
  },
  {
    path: '/OneZero_website/build/index.html/blog/archive',
    component: ComponentCreator('/OneZero_website/build/index.html/blog/archive', '978'),
    exact: true
  },
  {
    path: '/OneZero_website/build/index.html/blog/first-blog-post',
    component: ComponentCreator('/OneZero_website/build/index.html/blog/first-blog-post', '97d'),
    exact: true
  },
  {
    path: '/OneZero_website/build/index.html/blog/long-blog-post',
    component: ComponentCreator('/OneZero_website/build/index.html/blog/long-blog-post', 'c75'),
    exact: true
  },
  {
    path: '/OneZero_website/build/index.html/blog/mdx-blog-post',
    component: ComponentCreator('/OneZero_website/build/index.html/blog/mdx-blog-post', '662'),
    exact: true
  },
  {
    path: '/OneZero_website/build/index.html/blog/tags',
    component: ComponentCreator('/OneZero_website/build/index.html/blog/tags', '902'),
    exact: true
  },
  {
    path: '/OneZero_website/build/index.html/blog/tags/docusaurus',
    component: ComponentCreator('/OneZero_website/build/index.html/blog/tags/docusaurus', '0ce'),
    exact: true
  },
  {
    path: '/OneZero_website/build/index.html/blog/tags/facebook',
    component: ComponentCreator('/OneZero_website/build/index.html/blog/tags/facebook', '56d'),
    exact: true
  },
  {
    path: '/OneZero_website/build/index.html/blog/tags/hello',
    component: ComponentCreator('/OneZero_website/build/index.html/blog/tags/hello', 'ed9'),
    exact: true
  },
  {
    path: '/OneZero_website/build/index.html/blog/tags/hola',
    component: ComponentCreator('/OneZero_website/build/index.html/blog/tags/hola', 'ec8'),
    exact: true
  },
  {
    path: '/OneZero_website/build/index.html/blog/welcome',
    component: ComponentCreator('/OneZero_website/build/index.html/blog/welcome', '359'),
    exact: true
  },
  {
    path: '/OneZero_website/build/index.html/markdown-page',
    component: ComponentCreator('/OneZero_website/build/index.html/markdown-page', 'ebf'),
    exact: true
  },
  {
    path: '/OneZero_website/build/index.html/docs',
    component: ComponentCreator('/OneZero_website/build/index.html/docs', 'f11'),
    routes: [
      {
        path: '/OneZero_website/build/index.html/docs/category/tutorial---basics',
        component: ComponentCreator('/OneZero_website/build/index.html/docs/category/tutorial---basics', '61d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/index.html/docs/category/tutorial---extras',
        component: ComponentCreator('/OneZero_website/build/index.html/docs/category/tutorial---extras', '077'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/index.html/docs/intro',
        component: ComponentCreator('/OneZero_website/build/index.html/docs/intro', 'acd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/index.html/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/OneZero_website/build/index.html/docs/tutorial-basics/congratulations', '657'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/index.html/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/OneZero_website/build/index.html/docs/tutorial-basics/create-a-blog-post', '6eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/index.html/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/OneZero_website/build/index.html/docs/tutorial-basics/create-a-document', '378'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/index.html/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/OneZero_website/build/index.html/docs/tutorial-basics/create-a-page', '69b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/index.html/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/OneZero_website/build/index.html/docs/tutorial-basics/deploy-your-site', '5e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/index.html/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/OneZero_website/build/index.html/docs/tutorial-basics/markdown-features', '5b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/index.html/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/OneZero_website/build/index.html/docs/tutorial-extras/manage-docs-versions', 'b8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/build/index.html/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/OneZero_website/build/index.html/docs/tutorial-extras/translate-your-site', '307'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/OneZero_website/build/index.html/',
    component: ComponentCreator('/OneZero_website/build/index.html/', '615'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
