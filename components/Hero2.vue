<template>
  <section :id="section.id" class="hero container-fluid gx-0">
    <BuilderToolbar :section="section" />

    <div class="row justify-content-md-center text-center gx-0">
      <div class="col-md-8 col-xl-6 col-12 text-shadow">
        <h1 :class="section.Content.title.size">
          {{ section.Content.title.text }}
        </h1>
        <h3 :class="'pb-4 ' + section.Content.subtitle.size">
          {{ section.Content.subtitle.text }}
        </h3>
        <a
          :href="section.Content.buttonLink.text"
          :class="
            'btn btn-' + section.Content.buttonText.size + ' btn-success px-4'
          "
          >{{ section.Content.buttonText.text }}</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["section"],
  mounted() {
    // console.log(this.content);
  },
};
</script>