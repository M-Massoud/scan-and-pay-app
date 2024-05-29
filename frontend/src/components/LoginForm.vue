<template>
  <div class="login-form">
    <div class="login-form__headline">
      <img src="../../public/assets/flash-arrows.png" alt="arrows-image" />
      <h1>
        Hey there!

        <br />

        Pay with <img src="../../public/assets/flash-logo.png" alt="flash-logo" />!
      </h1>
      <form>
        <div class="login-form__number-container">
          <label class="login-form__label">What's your number</label>
          <input class="login-form__input" />
          <p class="login-form__helper">
            Enter the number linked to your Flash account.
          </p>
        </div>
        <div class="promotion">
          <img src="../../public/assets/promotion-icon.svg" alt="promotion-icon" />
          <p>Get 20% off on your first payment</p>
        </div>

        <button class="login-form__button">Next</button>
      </form>
    </div>
  </div>
</template>
<script setup></script>

<style scoped>
.login-form {
  padding: 3.75rem 10rem 0rem 2.5rem;
  border: 3px solid var(--main-grey-color);
  border-radius: 30px;
  width: 50vw;
  margin-left: auto;
}

.login-form__headline {
  margin-bottom: 3.75rem;
}

.login-form__headline h1 {
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

.login-form__input:focus {
  outline-color: var(--accent-color);
}

.login-form__helper {
  font-weight: 500;
  font-size: 0.875rem;
  margin-top: 0.8rem;
}

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

.login-form__button {
  background-color: var(--main-blue-color);
  font-size: 16px;
  color: #fff;
  padding: 1rem;
  width: 100%;
  display: block;
  margin-top: 5rem;
  border-radius: 0.875rem;
  border: none;
  cursor: pointer;
}
</style>
