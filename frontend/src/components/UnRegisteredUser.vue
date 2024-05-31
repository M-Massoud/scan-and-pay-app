<template>
  <div class="page-inner-content qr-page-container unregistered-user-page">
    <div class="qr-code-content">
      <img src="../../public/assets/flash-arrows.png" alt="arrows-image" />
      <h2>Hey there!</h2>

      <p class="qr-code-content__description">
        Seems like you don't have Flash app.
        <span style="color: #434547; font-weight: 600"
          >Scan this qr code to download it, create an account and pay the easy
          way!</span
        >
      </p>

      <Promotion />
    </div>

    <div class="qr-code-image">
      <img src="../../public/assets/QR-Code.png" alt="QR code" />
    </div>
  </div>
</template>

<script setup>
import Promotion from './Promotion.vue';
</script>

<style scoped>
.unregistered-user-page {
  padding-bottom: 5rem;
}

.qr-code-content h2 {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--main-blue-color);
  margin-top: 1.25rem;
  margin-bottom: 1.875rem;
}

.qr-code-content__description {
  font-size: 1rem;
  font-weight: 400;
  color: #434547;
  margin-bottom: 1.875rem;
}

.qr-code-image img {
  margin-top: 4rem;
}

.confirmation-warning {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 4.5rem;
  margin-bottom: 0.75rem;
}

.confirmation-warning p {
  color: #434547;
  font-weight: 500;
  font-size: 0.875rem;
}
</style>
