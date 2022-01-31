<template>
  <article class="content container-fluid gx-0" :id="id" data-aos="fade-in">
    <div class="row text-center justify-content-center gx-0">
      <div class="col col-lg-7 mx-auto text-shadow">
        <i class="fas fa-carrot fa-4x mb-4 text-danger"></i>
        <h2 class="pb-2 fw-bold">{{ content.title.text }}</h2>
        <p>
          {{ content.bodyText.text }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["content", "id"],
};
</script>