<script setup lang="ts">
import type { CvData } from '../types';
import JobAccordionItem from './JobAccordionItem.vue';
import SkillsChips from './SkillsChips.vue';

defineProps<{ title: string; current: CvData['current']; previous: CvData['previous']; skills: CvData['skills'] }>();
</script>

<template>
  <section id="o-que-faco" class="section alt">
    <div class="container">
      <h2>{{ title }}</h2>
      <h3>Atualmente</h3>
      <article class="card current">
        <h4>{{ current.role }}</h4>
        <p class="company">{{ current.company }} · {{ current.period }}</p>
        <ul class="plain">
          <li v-for="d in current.duties" :key="d">{{ d }}</li>
        </ul>
      </article>
      <h3>Antes</h3>
      <ul class="jobs">
        <JobAccordionItem v-for="j in previous" :key="j.id" :job="j" />
      </ul>
      <h3>Competências</h3>
      <SkillsChips :skills="skills" />
    </div>
  </section>
</template>
