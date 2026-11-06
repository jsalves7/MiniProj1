<script setup lang="ts">
import type { CvSkillGroup } from '../types';

defineProps<{ skills: CvSkillGroup[] }>();
</script>

<template>
  <div class="skills">
    <div v-for="g in skills" :key="g.group" class="skill-group">
      <h4>{{ g.group }}</h4>
      <ul class="chips">
        <li v-for="i in g.items" :key="i">{{ i }}</li>
      </ul>
    </div>
  </div>
</template>
