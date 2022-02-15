<template>
  <!-- Builder Main -->
  <div class="builder container-fluid bg-light px-0" id="builder-main">
    <!-- SIDEBAR -->
    <aside class="bg-light" id="builder-sidebar">
      <BuilderAccordion :sections="PageComponents" @selected="selectSection" />
    </aside>

    <!-- BUILDER CANVAS -->
    <main class="bg-white p-0 pb-3 overflow-auto" id="builder-canvas">
      <BuilderPreview
        :sections="PageComponents"
        @placeholder-clicked="selectSection"
      />
    </main>
  </div>
</template>

<script>
export default {
  name: "Builder",

  data() {
    return {};
  },
  computed: {
    PageComponents() {
      return this.$store.state.PageComponents;
    },
  },
  methods: {
    selectSection(section) {
      this.$store.commit("setSelected", section);
      //   console.log(this.PageComponents[section.id].Style);
    },
    insertSection(section) {
      var vm = this;
      this.$store.commit("setSelected", section);
    },
  },

  mounted() {
    var isMobile = screen.availWidth < 860;
    if (isMobile) {
      // console.log("Mobile");
      if (rellax) {
        rellax.destroy();
      }
    } else {
      // console.log("Desktop");
    }
  },
};
</script>

<style type="text/scss">
</style>