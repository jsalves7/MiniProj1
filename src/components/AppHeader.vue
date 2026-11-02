<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import type { CvSection } from '../types';

const props = defineProps<{ name: string; sections: CvSection[] }>();

const open = ref(false);
const activeId = ref('');
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (!('IntersectionObserver' in window)) return;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) if (entry.isIntersecting) activeId.value = entry.target.id;
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  for (const s of props.sections) {
    const el = document.getElementById(s.id);
    if (el) observer.observe(el);
  }
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#topo">{{ name }}</a>
      <button class="menu-toggle" type="button" :aria-expanded="open ? 'true' : 'false'"
        aria-controls="menu-principal" aria-label="Abrir ou fechar o menu" @click="open = !open">
        <span class="bars" aria-hidden="true"></span>
      </button>
      <nav id="menu-principal" class="menu" :class="{ open }" aria-label="Principal">
        <a v-for="s in sections" :key="s.id" :href="'#' + s.id" :class="{ active: activeId === s.id }"
          :aria-current="activeId === s.id ? 'true' : undefined" @click="open = false">{{ s.title }}</a>
      </nav>
    </div>
  </header>
</template>
