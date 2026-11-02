<script setup lang="ts">
import { onMounted } from 'vue';
import { cv } from './data';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import IntroSection from './components/IntroSection.vue';
import AboutSection from './components/AboutSection.vue';
import WorkSection from './components/WorkSection.vue';
import HobbiesSection from './components/HobbiesSection.vue';

const [about, work, hobbies] = cv.sections;

// Ligações diretas (#hobbies) só saltam depois de a página estar montada.
onMounted(() => {
  const id = decodeURIComponent(location.hash.slice(1));
  if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
});
</script>

<template>
  <div id="topo">
    <AppHeader :name="cv.person.name" :sections="cv.sections" />
    <main>
      <IntroSection :person="cv.person" :highlights="cv.highlights" />
      <AboutSection :title="about.title" :about="cv.about" :education="cv.education" />
      <WorkSection :title="work.title" :current="cv.current" :previous="cv.previous" :skills="cv.skills" />
      <HobbiesSection :title="hobbies.title" :hobbies="cv.hobbies" />
    </main>
    <AppFooter :name="cv.person.name" :socials="cv.socials" />
  </div>
</template>
