<template>
  <div class="drawer-start">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content relative">
      <label for="my-drawer-3" class="btn btn-circle swap swap-rotate z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          class="swap-off fill-current stroke-current inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
    </div>

    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar"></label>

      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <div class="min-h-screen flex flex-col pt-16">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/brass">Brass</RouterLink>
          <RouterLink to="/woodwind">Woodwind</RouterLink>
          <RouterLink to="/percussion">Percussion</RouterLink>
          <RouterLink to="/other">Other</RouterLink>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
