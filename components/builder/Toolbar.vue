<template>
  <div class="toolbar ms-auto">
    <div
      class="ms-auto text-center toolbar-btn"
      @click="deleteSection(section)"
    >
      <i class="fas fa-close text-white fa-2x"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: ["section"],
  methods: {
    deleteSection(section) {
      this.$store.commit("deleteSection", { section: section });
    },
  },
};
</script>