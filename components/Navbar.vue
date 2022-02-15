<template>
  <nav
    class="
      navbar navbar-expand-lg navbar-light
      bg-white
      sticky-top
      shadow-sm
      px-4
    "
  >
    <a class="navbar-brand h2" href="#"> Shotgun Sites </a>

    <ul class="nav mx-auto d-none d-lg-flex">
      <li class="nav-item">
        <a class="nav-link" href="#">How it Works</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Themes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Pricing</a>
      </li>
    </ul>

    <button type="button" class="btn btn-success">Build a Site</button>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style type="text/scss">
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>