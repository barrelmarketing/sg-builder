<template>
  <section :id="section.id" class="content container-fluid py-5" data-aos="">
    <BuilderToolbar :section="section" />

    <div class="row justify-content-center g-5">
      <div class="col-8 py-3 text-center">
        <h2 class="fw-bold">{{ section.Content.title.text }}</h2>
        <p>
          {{ section.Content.bodyText.text }}
        </p>
      </div>
    </div>

    <div
      class="
        row
        mb-4
        justify-content-md-center
        scroll-row
        flex-row flex-nowrap
        gap-3
      "
    >
      <div
        class="col"
        v-for="item in section.Content.repeaters"
        :key="item.title"
      >
        <div class="card">
          <img :src="item.image.src" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 :class="'card-title fw-bold ' + section.Content.size">
              {{ item.title }}
            </h5>
            <p class="card-text">
              {{ item.content }}
            </p>
            <a v-if="item.link" href="#" class="card-link">Learn More</a>
          </div>
        </div>
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