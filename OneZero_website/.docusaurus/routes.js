import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/OneZero_website/blog',
    component: ComponentCreator('/OneZero_website/blog', '7de'),
    exact: true
  },
  {
    path: '/OneZero_website/blog/archive',
    component: ComponentCreator('/OneZero_website/blog/archive', '81c'),
    exact: true
  },
  {
    path: '/OneZero_website/blog/first-blog-post',
    component: ComponentCreator('/OneZero_website/blog/first-blog-post', 'd5e'),
    exact: true
  },
  {
    path: '/OneZero_website/blog/long-blog-post',
    component: ComponentCreator('/OneZero_website/blog/long-blog-post', '5d5'),
    exact: true
  },
  {
    path: '/OneZero_website/blog/mdx-blog-post',
    component: ComponentCreator('/OneZero_website/blog/mdx-blog-post', '40b'),
    exact: true
  },
  {
    path: '/OneZero_website/blog/tags',
    component: ComponentCreator('/OneZero_website/blog/tags', 'b05'),
    exact: true
  },
  {
    path: '/OneZero_website/blog/tags/docusaurus',
    component: ComponentCreator('/OneZero_website/blog/tags/docusaurus', 'e16'),
    exact: true
  },
  {
    path: '/OneZero_website/blog/tags/facebook',
    component: ComponentCreator('/OneZero_website/blog/tags/facebook', '730'),
    exact: true
  },
  {
    path: '/OneZero_website/blog/tags/hello',
    component: ComponentCreator('/OneZero_website/blog/tags/hello', '283'),
    exact: true
  },
  {
    path: '/OneZero_website/blog/tags/hola',
    component: ComponentCreator('/OneZero_website/blog/tags/hola', '89f'),
    exact: true
  },
  {
    path: '/OneZero_website/blog/welcome',
    component: ComponentCreator('/OneZero_website/blog/welcome', 'd5d'),
    exact: true
  },
  {
    path: '/OneZero_website/markdown-page',
    component: ComponentCreator('/OneZero_website/markdown-page', 'b82'),
    exact: true
  },
  {
    path: '/OneZero_website/docs',
    component: ComponentCreator('/OneZero_website/docs', '474'),
    routes: [
      {
        path: '/OneZero_website/docs/category/tutorial---basics',
        component: ComponentCreator('/OneZero_website/docs/category/tutorial---basics', '645'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/docs/category/tutorial---extras',
        component: ComponentCreator('/OneZero_website/docs/category/tutorial---extras', '204'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/docs/intro',
        component: ComponentCreator('/OneZero_website/docs/intro', 'e67'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/OneZero_website/docs/tutorial-basics/congratulations', '097'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/OneZero_website/docs/tutorial-basics/create-a-blog-post', '68c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/OneZero_website/docs/tutorial-basics/create-a-document', 'd95'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/OneZero_website/docs/tutorial-basics/create-a-page', '501'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/OneZero_website/docs/tutorial-basics/deploy-your-site', 'd8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/OneZero_website/docs/tutorial-basics/markdown-features', 'b3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/OneZero_website/docs/tutorial-extras/manage-docs-versions', 'c95'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/OneZero_website/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/OneZero_website/docs/tutorial-extras/translate-your-site', '925'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/OneZero_website/',
    component: ComponentCreator('/OneZero_website/', 'be0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
