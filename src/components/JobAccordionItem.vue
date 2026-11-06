<script setup lang="ts">
import { ref } from 'vue';
import type { CvPreviousJob } from '../types';

const props = defineProps<{ job: CvPreviousJob }>();
const open = ref(false);
const panelId = 'painel-' + props.job.id;
const buttonId = 'botao-' + props.job.id;
</script>

<template>
  <li class="job" :class="{ open }">
    <h4>
      <button :id="buttonId" type="button" :aria-expanded="open ? 'true' : 'false'" :aria-controls="panelId"
        @click="open = !open">
        <span class="job-title">
          <strong>{{ job.role }}</strong>
          <span>{{ job.company }} · {{ job.period }}</span>
        </span>
        <span class="chevron" aria-hidden="true"></span>
      </button>
    </h4>
    <div :id="panelId" class="job-panel" role="region" :aria-labelledby="buttonId" :hidden="!open">
      <ul class="plain">
        <li v-for="b in job.bullets" :key="b">{{ b }}</li>
      </ul>
    </div>
  </li>
</template>
