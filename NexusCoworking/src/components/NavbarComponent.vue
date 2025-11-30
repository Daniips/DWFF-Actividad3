<template>
  <nav class="navbar">
    <div class="container navbar-inner">
      <RouterLink to="/" class="logo">
        Nexus Coworking
      </RouterLink>

      <ul class="nav-links">
        <li>
          <RouterLink to="/spaces">Espacios</RouterLink>
        </li>
        <li>
          <RouterLink to="/checkout">Reserva</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  border-bottom: 1px solid #e5e5e5;
  padding: 1rem 0;
  background-color: #ffffff;
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  color: #111827;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
}

.nav-links a {
  text-decoration: none;
  font-size: 0.95rem;
  color: #4b0082;
}

.nav-links a.router-link-active {
  border-bottom: 2px solid #4b0082;
  padding-bottom: 0.2rem;
}
</style>
