<template>
  <header>
    <h1>Student Portal</h1>

    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/courses">Courses</RouterLink> |
      <RouterLink to="/profile">Profile</RouterLink>
    </nav>

    <hr />
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
header {
  padding: 15px;
}
</style>