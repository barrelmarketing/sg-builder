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
          @click="selectSection(section)"
        >
          {{ section.Style.BuilderText }}
        </button>
      </h2>
      <div
        :id="'collapse' + section.id"
        :class="'accordion-collapse collapse ' + section.Style.Show"
        data-bs-parent="#builderAccordion"
      >
        <div class="accordion-body px-0">
          <h3 class="h4 mt-4">Choose from one of the layouts below:</h3>
          <BuilderLayoutSelector
            :section="section"
            v-model="section.Style.Selected"
          />
          <h3 class="h4 mt-4">Enter your text:</h3>

          <!-- STRAIGHT VALUES -->
          <div
            class="input-group flex-nowrap mb-3"
            v-if="!section.Content.items"
            v-for="field in section.Content"
            :key="field.label"
          >
            <span
              class="font-weight-bold my-auto fw-bold col-6 col-md-3"
              :id="section.id + '-' + field.label"
              >{{ field.label }}:</span
            >
            <input
              type="text"
              class="form-control border-0 border-bottom col"
              :placeholder="field.text"
              :aria-label="field.label"
              :aria-describedby="section.id + '-' + field.label"
              v-model="field.text"
            />
            <div class="col-2 ms-1" v-if="field.options">
              <select
                class="form-select"
                aria-label="font size"
                v-model="field.size"
              >
                <option value="md" disabled selected>Size</option>
                <option
                  v-for="option in field.options"
                  :key="option"
                  :value="option"
                >
                  {{ option.toUpperCase() }}
                </option>
              </select>
            </div>
          </div>

          <!-- REPEATER -->
          <div
            class="input-group flex-nowrap mb-3"
            v-if="section.Content.items"
            v-for="(item, index) in section.Content.items"
            :key="item.text"
          >
            <span
              class="font-weight-bold my-auto fw-bold col-6 col-md-3"
              :id="section.id + '-' + item.text"
              >Item {{ index + 1 }}:</span
            >
            <input
              type="text"
              class="form-control border-0 border-bottom col-1 w-25"
              :placeholder="item.value"
              :aria-label="item.value"
              :aria-describedby="section.id + '-' + item.value"
              v-model="item.value"
            />
            <input
              type="text"
              class="form-control border-0 border-bottom mx-2 w-50"
              :placeholder="item.text"
              :aria-label="item.text"
              :aria-describedby="section.id + '-' + item.text"
              v-model="item.text"
            />
            <div class="col-2 ms-1" v-if="item.options">
              <select
                class="form-select"
                aria-label="font size"
                v-model="item.size"
              >
                <option value="md" disabled selected>Size</option>
                <option
                  v-for="option in item.options"
                  :key="option"
                  :value="option"
                >
                  {{ option.toUpperCase() }}
                </option>
              </select>
            </div>
          </div>

          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-success"
              @click="saveSection(section)"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + section.id"
            >
              Save
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
      this.$emit("save", section);
    },
    selectSection(section) {
      console.log(section.Style);
      if (section.Style.Collapsed == "collapsed") {
        this.$emit("select", section);
      }
    },
  },
  mounted() {},
};
</script>