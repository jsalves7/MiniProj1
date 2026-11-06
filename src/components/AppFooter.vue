<script setup lang="ts">
import type { CvSocial } from '../types';
import AppIcon from './AppIcon.vue';

defineProps<{ name: string; socials: CvSocial[] }>();

const isExternal = (s: CvSocial) => !s.href.startsWith('mailto:');
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <p>© 2026 {{ name }}</p>
      <ul class="socials">
        <li v-for="s in socials" :key="s.id">
          <a :href="s.href" :aria-label="s.label" :title="s.label"
            :target="isExternal(s) ? '_blank' : undefined" :rel="isExternal(s) ? 'noopener noreferrer' : undefined">
            <AppIcon :name="s.id" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
