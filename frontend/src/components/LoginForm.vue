<template>
  <div class="page-inner-content">
    <div class="login-form">
      <img src="../../assets/flash-arrows.png" alt="arrows-image" />
      <h1 class="login-form__headline">
        Hey there!

        <br />

        Pay with <img src="../../assets/flash-logo.png" alt="flash-logo" />!
      </h1>
      <form>
        <div class="login-form__number-container">
          <label class="login-form__label">What's your number</label>
          <input class="login-form__input" placeholder="01xxxxxxxxx" />
          <p class="login-form__helper">
            Enter the number linked to your Flash account.
          </p>
        </div>

        <Promotion />

        <RouterLink to="pay-invoice">
          <button class="login-form__button main-button">Next</button>
        </RouterLink>
      </form>
    </div>
  </div>
</template>

<script setup>
import Promotion from './Promotion.vue';
</script>

<style scoped>
.login-form {
  padding-right: 40%;
}

.login-form__headline {
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 1.25rem;
  color: var(--main-blue-color);
  line-height: 140%;
}

.login-form__number-container {
  display: flex;
  flex-direction: column;
  margin-top: 3.75rem;
  margin-bottom: 1.875rem;
}

.login-form__label {
  color: var(--main-blue-color);
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.8rem;
}

.login-form__input {
  padding: 1rem;
  border: 2px solid var(--main-grey-color);
  border-radius: 0.875rem;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  max-width: 22rem;
}

.login-form__input::placeholder {
  color: #dbdada;
}

.login-form__input:focus {
  outline-color: var(--accent-color);
}

.login-form__helper {
  font-weight: 500;
  font-size: 0.875rem;
  margin-top: 0.8rem;
}

.login-form__button {
  margin-top: 3rem;
}
</style>
