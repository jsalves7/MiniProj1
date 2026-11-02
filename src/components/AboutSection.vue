<script setup lang="ts">
import type { CvData } from '../types';

defineProps<{ title: string; about: CvData['about']; education: CvData['education'] }>();
</script>

<template>
  <section id="quem-sou-eu" class="section">
    <div class="container">
      <h2>{{ title }}</h2>
      <div class="two-col">
        <div>
          <p>{{ about.summary }}</p>
          <h3>Pontos fortes</h3>
          <ul class="plain">
            <li v-for="s in about.strengths" :key="s">{{ s }}</li>
          </ul>
          <h3>Línguas</h3>
          <ul class="plain">
            <li v-for="l in about.languages" :key="l.name">{{ l.name }}: {{ l.level }}</li>
          </ul>
        </div>
        <div>
          <h3>Formação</h3>
          <ul class="timeline">
            <li v-for="e in education" :key="e.title + e.period">
              <span class="period">{{ e.period }}</span>
              <strong>{{ e.title }}</strong>
              <span>{{ e.school }}</span>
              <span v-if="e.grade" class="grade">{{ e.grade }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
