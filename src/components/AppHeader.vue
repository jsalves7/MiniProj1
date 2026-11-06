<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import type { CvSection } from '../types';

const props = defineProps<{ name: string; sections: CvSection[] }>();

const open = ref(false);
const activeId = ref('');

// Secção ativa: a última cujo topo já passou 40% do ecrã; no fim da página, a última.
function updateActive() {
  const ids = props.sections.map((s) => s.id);
  const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  let current = '';
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id;
  }
  activeId.value = atBottom ? (ids[ids.length - 1] ?? '') : current;
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = false;
}

onMounted(() => {
  updateActive();
  window.addEventListener('scroll', updateActive, { passive: true });
  window.addEventListener('resize', updateActive);
  window.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateActive);
  window.removeEventListener('resize', updateActive);
  window.removeEventListener('keydown', onKeydown);
});
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
