<script setup lang="ts">
import { computed } from 'vue';
import { ICONS, type IconName } from '../icons';

const props = defineProps<{ name: IconName }>();
const markup = computed(() => ICONS[props.name]);
</script>

<template>
  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" v-html="markup"></svg>
</template>
