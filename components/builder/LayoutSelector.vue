<template>
  <div class="form-check form-check-inline row d-flex mx-0 px-0">
    <div class="card col mx-1" :data-checked="section.Style.Selected">
      <label class="form-check-label h-100">
        <div class="card-body h-100">
          <input
            class="form-check-input ms-0 me-2"
            type="radio"
            name="LayoutForm"
            id="blank_layout"
            value=""
            @change="$emit('input', $event.target.value)"
          />
          <h5 class="card-title h-100">None</h5>
        </div>
      </label>
    </div>
    <div
      class="card col mx-1"
      v-for="option in section.Style.Options"
      :key="option.value"
      :data-checked="option.value == section.Style.Selected"
    >
      <label class="form-check-label" :for="option.value">
        <div class="card-body">
          <input
            class="form-check-input ms-0 me-2"
            type="radio"
            name="LayoutForm"
            :id="option.value"
            :value="option.value"
            @change="$emit('input', $event.target.value)"
          />
          <h5 class="card-title">{{ option.label }}</h5>
          <p :class="'card-text p-3 text-' + option.align">
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
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
        consosle.log(newValue);
      },
    },
  },
  mounted() {
    console.log(this.section);
  },
};
</script>