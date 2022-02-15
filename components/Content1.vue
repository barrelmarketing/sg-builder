<template>
  <section
    :id="section.id"
    class="content container-fluid gx-0"
    data-aos="fade-in"
  >
    <BuilderToolbar :section="section" />

    <div class="row text-center justify-content-center gx-0">
      <div class="col col-lg-7 mx-auto text-shadow">
        <i class="fas fa-carrot fa-4x mb-4 text-danger"></i>
        <h2 class="pb-2 fw-bold">{{ section.Content.title.text }}</h2>
        <p>
          {{ section.Content.bodyText.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["section"],
};
</script>