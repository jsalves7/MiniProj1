<script setup lang="ts">
import { onMounted } from 'vue';
import { cv } from './data';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

// Ligações diretas (#hobbies) só saltam depois de a página estar montada.
onMounted(() => {
  const id = decodeURIComponent(location.hash.slice(1));
  if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'auto' });
});
</script>

<template>
  <div id="topo">
    <AppHeader :name="cv.person.name" :sections="cv.sections" />
    <main>
      <section v-for="s in cv.sections" :id="s.id" :key="s.id" class="section">
        <div class="container">
          <h2>{{ s.title }}</h2>
        </div>
      </section>
    </main>
    <AppFooter :name="cv.person.name" :socials="cv.socials" />
  </div>
</template>
