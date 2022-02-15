<template>
  <div class="accordion accordion-flush" id="builderAccordion">
    <div class="accordion-item" v-for="section in sections" :key="section.id">
      <h2 class="accordion-header">
        <button
          :class="'accordion-button  ' + section.Style.Collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + section.id"
          aria-expanded="false"
          :aria-controls="'collapse' + section.id"
        >
          {{ section.Style.BuilderText }}
        </button>
      </h2>
      <div class="d-grid" v-if="section.Style.Deleted == true">
        <button
          class="btn btn-outline-success"
          @click="undeleteSection(section)"
        >
          <i class="fas fa-plus me-3 my-1"></i>Add Section
        </button>
      </div>
      <div
        :id="'collapse' + section.id"
        :class="'accordion-collapse collapse ' + section.Style.Show"
        v-show="!section.Style.Deleted"
        data-bs-parent="#builderAccordion"
      >
        <div class="accordion-body px-0">
          <div
            class="p-3"
            v-if="section.Description"
            v-html="section.Description"
          ></div>
          <h5 class="my-2">Choose a layout:</h5>
          <BuilderLayoutSelector :section="section" />
          <h5 class="mt-4 mb-2">Enter your text:</h5>

          <!-- Static inputs -->
          <BuilderInputgroup :section="section" />

          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-danger me-3"
              @click="deleteSection(section)"
            >
              Delete
            </button>
            <button
              type="button"
              class="btn btn-success"
              @click="saveSection(section)"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + section.id"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sections"],
  methods: {
    saveSection(section) {
      this.$store.commit("nextSection", { section: section });
    },
    deleteSection(section) {
      this.$store.commit("deleteSection", { section: section });
    },
    undeleteSection(section) {
      this.$store.commit("undeleteSection", { section: section });
    },

    setSelected(selected) {
      this.$store.commit("setSelected", {
        section: this.section,
        value: selected,
      });
    },
  },
  computed: {},
  mounted() {},
};
</script>