<script setup lang="ts">
import type { CvData } from '../types';

const props = defineProps<{ person: CvData['person']; highlights: CvData['highlights'] }>();
const initials = props.person.name
  .split(' ')
  .map((w) => w[0])
  .join('');
</script>

<template>
  <section class="intro" aria-label="Apresentação">
    <div class="container">
      <div class="intro-inner">
        <img v-if="person.photo" class="photo" :src="person.photo" :alt="'Fotografia de ' + person.name">
        <div v-else class="photo placeholder" aria-hidden="true">{{ initials }}</div>
        <div>
          <h1>{{ person.name }}</h1>
          <p class="title">{{ person.title }}</p>
        </div>
      </div>
      <ul class="highlights">
        <li v-for="h in highlights" :key="h.label"><strong>{{ h.value }}</strong><span>{{ h.label }}</span></li>
      </ul>
    </div>
  </section>
</template>
