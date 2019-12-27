<template>
    <section v-if="title && projects">
        <h2 :class="$style.title">{{ title }}</h2>

        <ul v-if="projects" :class="$style.list">
            <li v-for="project in projects" :key="project.name" :class="$style.listItem">
                <a v-if="project.name && project.url"
                   :href="project.url"
                   target="_blank"
                   rel="noopener noreferrer"
                >{{ project.name }}</a>
                <ul>
                    <li>{{ project.description }}</li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
      props: {
        title: {
          type: String,
          default: ''
        },
        projects: {
          type: Array,
          default: () => []
        }
      }
    }
</script>

<style module lang="scss">
    .title {
        --title-font-size: 1.5rem;
        --title-letter-spacing: -0.011em;
        --title-line-height: 1.35;

        font-weight: var(--font-weight-bold);
        font-size: var(--title-font-size);
        letter-spacing: var(--title-letter-spacing);
        line-height: var(--title-line-height);
    }

    .list {
        --list-style-type: none;
        --list-padding-left: 0;
        --list-margin-bottom: 0;

        list-style-type: var(--list-style-type);
        padding-left: var(--list-padding-left);
        margin-bottom: var(--list-margin-bottom);
    }

    .listItem {
        --list-item-margin-bottom: 0.5rem;

        margin-bottom: var(--list-item-margin-bottom);

        &:last-of-type {
            margin-bottom: 0;
        }
    }
</style>