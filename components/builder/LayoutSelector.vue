<template>
  <div
    class="
      form-check form-check-inline
      row
      d-flex
      mx-0
      px-0
      text-center
      layoutSelector
    "
  >
    <div class="card col mx-1" :data-checked="selected == ''">
      <label class="form-check-label h-100">
        <div class="card-body h-100">
          <input
            class="form-check-input ms-0 me-2 d-none"
            type="radio"
            :name="'LayoutForm_' + section.id"
            v-model="selected"
            value=""
          />
          <div class="card-title small h-100">None</div>
        </div>
      </label>
    </div>
    <div
      class="card col mx-1 px-2 pb-2"
      v-for="option in section.Style.Options"
      :key="option.value"
      :data-checked="option.value == selected"
    >
      <label class="form-check-label">
        <div class="card-body">
          <input
            class="form-check-input ms-0 me-2 d-none"
            type="radio"
            :name="'LayoutForm_' + section.id"
            :value="option.value"
            v-model="selected"
          />
          <div class="card-title mb-0 small">{{ option.label }}</div>
          <p :class="'card-text p-2 text-' + option.align">
            <span
              v-for="placeholder in option.placeholders"
              :key="placeholder"
              :class="placeholder"
            ></span>
          </p>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["section"],
  computed: {
    selected: {
      get() {
        return this.$store.state.PageComponents[this.section.id].Style.Selected;
      },
      set(selected) {
        console.log(selected);
        this.$store.commit("setSelected", {
          section: this.section,
          selected: selected,
        });
      },
    },
  },
  methods: {
    setSelected(selected) {
      this.$store.commit("setSelected", {
        section: this.section,
        value: selected,
      });
    },
  },
  mounted() {
    // console.log(this.section);
  },
};
</script>