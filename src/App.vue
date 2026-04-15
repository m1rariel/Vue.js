<script setup></script>

<template>
  <main>
    <RouterView />
  </main>
</template>
<style>
button {
  cursor: pointer;
}
main {
  font-family: "Inter", sans-serif;
}
.content-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  margin-block: 0;
  padding-block: 0;
  background-color: transparent;
  border: none;
}
ul {
  text-decoration: none;
  list-style: none;
  margin-block: 0;
  padding-inline: 0;
}
</style>
