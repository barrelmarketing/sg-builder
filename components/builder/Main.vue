<template>
  <!-- Builder Main -->
  <div class="builder container-fluid bg-light px-0" id="builder-main">
    <!-- SIDEBAR -->
    <aside class="bg-light" id="builder-sidebar">
      <BuilderAccordion :sections="PageComponents" @selected="selectSection" />
      <div class="w-100">
        <button class="btn btn-success btn-block mt-3" @click="savePage">
          Save Page
        </button>
      </div>
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
   
    savePage() {
      this.$store.commit("savePage");
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