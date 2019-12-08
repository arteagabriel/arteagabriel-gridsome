<template>
  <Layout>
    <p v-if="about" v-html="about" />

    <Projects :title="projectsTitle" :projects="projects" />
  </Layout>
</template>

<script>
  import Projects from '~/components/Projects';

    export default {
      metaInfo: function() {
        const node = this.$page.index.edges[0].node;

        return {
          title: node.metaTitle,
          meta: [
            { key: 'description', name: 'description', content: node.metaDescription }
          ]
        }
      },
      components: {
        Projects
      },
      computed: {
        node: function() {
          return this.$page.index.edges[0].node;
        },
        about: function() {
          return this.node.about.replace('\n', '<br /><br />');
        },
        projectsTitle: function() {
          return this.node.projectsTitle;
        },
        projects: function() {
          return this.node.projects;
        }
      }
    }
</script>

<page-query>
  query {
    index: allSanitySite(filter: { name: { eq: "Production" }}) {
      edges {
        node {
          metaTitle
          metaDescription
          about
          projectsTitle
          projects {
            name: websiteName
            url: websiteUrl
            description
          }
        }
      }
    }
  }
</page-query>
