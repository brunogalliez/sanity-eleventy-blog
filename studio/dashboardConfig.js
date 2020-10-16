export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8a1a653437676549725338',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-a5fc488f',
                  apiId: 'c5ffab3b-b35c-4fdf-94dc-eacaa34bee64'
                },
                {
                  buildHookId: '5f8a1a6510b6b254f50a5428',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-yxw5sazy',
                  apiId: '291e62c5-4694-499c-b9c6-08fe8c18f4e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brunogalliez/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-yxw5sazy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
