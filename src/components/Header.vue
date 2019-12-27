<template>
    <header :class="$style.header">
        <a v-if="logo" :class="$style.logoLink" href="/">
            <img :src="logo" :class="$style.logo" :alt="$static.metadata.siteName" />
        </a>

        <div v-if="linkedIn || github || email" :class="$style.links">
            <a v-if="email" :href="'mailto:' + email" :class="$style.link">Email</a>
            <a v-if="github" :href="github" :class="$style.link" target="_blank" rel="noopener noreferrer">Github</a>
            <a v-if="linkedIn" :href="linkedIn" :class="$style.link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
    </header>
</template>

<script>
    export default {
      computed: {
        node: function() {
          return this.$static.header.edges[0].node;
        },
        logo: function() {
          return this.node.logo.asset.url;
        },
        linkedIn: function() {
          return this.node.linkedIn;
        },
        github: function() {
          return this.node.github;
        },
        email: function() {
          return this.node.email;
        }
      }
    }
</script>

<static-query>
    query {
        metadata {
            siteName
        }
        header: allSanitySite(filter: { name: { eq: "Production" }}) {
            edges {
                node {
                    logo {
                        asset {
                            url
                        }
                    }
                    linkedIn: linkedin
                    github
                    email
                }
            }
        }
    }
</static-query>

<style module lang="scss">
    .header {
        padding: 34px 0;
        display: flex;
        align-items: center;
    }
    
    .logo {
        width: 32px;
        height: auto;
    }
    
    .logoLink {
        transition: 0.3s transform ease-out;
        
        &:hover {
            transform: rotate(-90deg);
            text-decoration: none;
        }
    }

    .links {
        margin-left: auto;
    }

    .link {
        --link-padding-x: 0.8em;
        --link-color: #aaa;
        --link-hover-color: var(--body-color);
        --link-font-size: 12px;

        display: inline-block;
        color: var(--link-color);
        padding-left: var(--link-padding-x);
        padding-right: var(--link-padding-x);
        font-size: var(--link-font-size);
        font-family: var(--font-family-monospace);

        &:first-of-type {
            padding-left: 0;
        }

        &:last-of-type {
            padding-right: 0;
        }

        &:hover {
            color: var(--link-hover-color);
            text-decoration: none;
        }
    }
</style>