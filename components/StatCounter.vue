<template>
  <article class="stats container-fluid bg-success gx-0" style="height: 300px">
    <div
      class="
        row
        h-100
        align-items-center
        justify-content-center
        text-center
        gx-5
        px-3
      "
    >
      <div
        class="col-4 col-xl-2"
        v-for="item in content.items"
        :key="item.text"
      >
        <p class="h1 fw-bold text-light">{{ item.value }}</p>
        <p class="h5 text-white">{{ item.text }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["content"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.content.items);
  },
};
</script>