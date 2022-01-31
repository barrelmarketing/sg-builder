<template>
  <article class="hero container-fluid gx-0" :id="id">
    <div class="row justify-content-md-center text-center gx-0">
      <div class="col-md-8 col-xl-6 col-12 text-shadow">
        <h1 :class="content.title.size">{{ content.title.text }}</h1>
        <h3 :class="'pb-4 ' + content.subtitle.size">
          {{ content.subtitle.text }}
        </h3>
        <a
          :href="content.buttonLink.text"
          :class="'btn btn-' + content.buttonText.size + ' btn-success px-4'"
          >{{ content.buttonText.text }}</a
        >
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["content", "id"],
  mounted() {
    // console.log(this.content);
  },
};
</script>