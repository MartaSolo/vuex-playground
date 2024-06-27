<template>
  <div class="airport">
    <p>{{ airport.abbreviation }}</p>
    <p>{{ airport.name }}</p>
    <p>{{ airport.city }}, {{ airport.state }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Airport } from '@/types/airport'

const props = defineProps<{
  airport: Airport
}>()
</script>

<style scoped>
.airport {
  border: 3px solid;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
}

.airport p:first-child {
  font-weight: bold;
  font-size: 2.5rem;
  margin: 1rem 0;
}

.airport p:last-child {
  font-style: italic;
  font-size: 0.8rem;
}
</style>
