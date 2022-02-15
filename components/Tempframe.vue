<template>
  <section class="content tempframe container-fluid gx-0">
    <div class="row text-center justify-content-center gx-0">
      <div class="col col-lg-7 mx-auto text-shadow">
        <h2 class="pb-2 fw-bold">{{ section.name }}</h2>
        <div class="hover-text font-weight-bold col-lg-8 mx-auto">
          <BuilderLayoutSelector
            :section="section"
            v-model="section.Style.Selected"
            @input="placeholderClicked"
          />

          <div class="mt-3">
            <button
              type="button"
              class="btn btn-outline-success border-0 border-bottom me-3"
              @click="deleteSection(section)"
            >
              <i class="fas fa-trash-alt"></i>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["section"],
  methods: {
    placeholderClicked(section) {
      this.$emit("placeholder-clicked", section);
      console.log("clicked", section);
    },
    deleteSection(section) {
      this.$store.commit("deleteSection", { section: section });
    },
    undeleteSection(section) {
      this.$store.commit("undeleteSection", { section: section });
    },
  },
};
</script>