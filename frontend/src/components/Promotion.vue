<template>
  <div class="promotion">
    <img src="../../public/assets/promotion-icon.svg" alt="promotion-icon" />
    <p>Get 20% off on your first payment</p>
  </div>
</template>

<script setup></script>

<style scoped>
.promotion {
  display: flex;
  gap: 0.5rem;
  width: fit-content;
  background-color: #caf15e3a;
  padding: 0.625rem;
  border-radius: 0.375rem 0 0.375rem 0;
}

.promotion p {
  color: var(--main-blue-color);
  font-weight: 600;
  font-size: 0.875rem;
}
</style>
