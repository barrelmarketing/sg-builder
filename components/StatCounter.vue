<template>
  <section
    :id="section.id"
    class="stats container-fluid bg-success gx-0"
    style="height: 300px"
  >
    <BuilderToolbar :section="section" />

    <div
      class="
        row
        h-100
        align-items-center
        justify-content-center
        text-center
        gx-0
      "
    >
      <div
        class="col-4 col-xl-2"
        v-for="item in section.Content.repeaters"
        :key="item.title"
      >
        <p class="h1 fw-bold text-light">{{ item.content }}</p>
        <p class="h5 text-white">{{ item.title }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["section"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.section.Content.repeaters);
  },
};
</script>