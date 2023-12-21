<template>
  <teleport to="body">
    <dialog open>
      <div class="hotel__bookingForm" v-if="$slots.bookingForm">
        <slot name="bookingForm"></slot>
      </div>
      <div class="greetings">
        <slot name="hotelGreetings" v-if="$slots.hotelGreetings"> </slot>
      </div>
    </dialog>
  </teleport>
</template>

<script setup></script>

<style>
dialog {
  width: 50%;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid hsl(var(--argent));
  border-radius: 0.5rem;
  padding: 2rem;
}
.hotel__bookingForm {
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
}
.hotel__bookingForm h3,
.greetings h3 {
  text-align: center;
  font-size: 3rem;
  color: red;
}
.hotel__bookingForm form {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
}
.hotel__bookingForm form > div:not(:last-child) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block-end: 1rem;
}
.hotel__bookingForm form label {
  width: 75%;
  font-size: 2rem;
  margin-inline: auto;
  margin-block-end: 1rem;
}
.hotel__bookingForm form input {
  width: 75%;
  margin-inline: auto;
  padding: 1rem 2rem;
  border: 1px solid hsl(var(--argent));
  border-radius: 0.5rem;
  font-size: 2rem;
}
.hotel__bookingForm .form__buttons,
.greetings .greetings__button {
  display: flex;
  justify-content: flex-end;
  column-gap: 1rem;
  margin-block-start: 2rem;
}
.hotel__bookingForm .form__buttons button,
.greetings__button button {
  background-color: hsl(var(--white));
  border: 1px solid hsl(var(--argent));
  border-radius: 0.3rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 250ms linear;
}
.hotel__bookingForm .form__buttons button:first-child,
.greetings__button button {
  color: hsl(var(--red));
}
.hotel__bookingForm .form__buttons button:first-child:hover,
.greetings__button button:hover {
  color: hsl(var(--white));
  background-color: hsl(var(--red));
}
.hotel__bookingForm .form__buttons button:last-child {
  color: hsl(var(--blue));
}
.hotel__bookingForm .form__buttons button:last-child:hover {
  color: hsl(var(--white));
  background-color: hsl(var(--blue));
}
</style>
