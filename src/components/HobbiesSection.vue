<script setup lang="ts">
import type { CvHobby } from '../types';
import AppIcon from './AppIcon.vue';

defineProps<{ id: string; title: string; hobbies: CvHobby[] }>();
</script>

<template>
  <section :id="id" class="section">
    <div class="container">
      <h2>{{ title }}</h2>
      <ul class="hobbies">
        <li v-for="h in hobbies" :key="h.id" class="card">
          <AppIcon :name="h.icon" />
          <h3>{{ h.title }}</h3>
          <p>{{ h.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
