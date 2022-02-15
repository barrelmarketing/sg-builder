<template>
  <div class="toolbar ms-auto">
    <div class="ms-auto text-center toolbar-btn" @click="hideSection(section)">
      <i class="fas fa-close text-white fa-2x"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: ["section"],
  methods: {
    hideSection(section) {
      this.$store.commit("hideSection", { section: section });
    },
  },
};
</script>