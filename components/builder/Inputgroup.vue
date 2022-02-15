<template>
  <div class="row">
    <!-- Static inputs -->
    <div v-if="!section.Content.repeaters">
      <div
        class="input-group flex-nowrap mb-3"
        v-for="field in section.Content"
        :key="field.label"
      >
        <span class="font-weight-bold my-auto fw-bold col-6 col-md-3"
          >{{ field.label }}:</span
        >
        <input
          type="text"
          class="form-control border-0 border-bottom col"
          :placeholder="field.text"
          :aria-label="field.label"
          :value="field.text"
          @input="updateContent(field.id, 'text', $event.target.value)"
        />
        <div class="col-2 ms-1" v-if="field.options">
          <select
            class="form-select"
            aria-label="font size"
            :value="field.size"
            @input="updateContent(field.id, 'size', $event.target.value)"
          >
            <option value="" disabled>Size</option>
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
    </div>
    <!-- Repeater inputs -->
    <div v-if="section.Content.repeaters">
      <div
        class="input-group flex-nowrap mb-3"
        v-for="(item, index) in section.Content.repeaters"
        :key="item.title"
      >
        <span
          class="font-weight-bold my-auto fw-bold col-6 col-md-2"
          :id="section.id + '-' + item.title"
          >Item {{ index + 1 }}:</span
        >

        <input
          type="text"
          class="form-control border-0 border-bottom mx-2 w-50"
          :placeholder="item.title"
          :aria-label="item.title"
          :aria-describedby="section.id + '-' + item.title"
          v-model="item.title"
        />
        <input
          type="text"
          class="form-control border-0 border-bottom col-1 w-25"
          :placeholder="item.content"
          :aria-label="item.content"
          :aria-describedby="section.id + '-' + item.content"
          v-model="item.content"
        />
        <div class="col-2 ms-1" v-if="item.options">
          <select
            class="form-select"
            aria-label="font size"
            v-model="item.size"
          >
            <option value="md" disabled>Size</option>
            <option
              v-for="option in item.options"
              :key="option"
              :value="option"
            >
              {{ option.toUpperCase() }}
            </option>
          </select>
        </div>
        <div class="col-1">
          <button
            class="btn btn-danger rounded-none border-0 ms-2"
            @click="removeItem(index)"
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
      <div class="row justify-content-center">
        <button
          class="btn btn-primary mb-4"
          @click="addItem"
          :disabled="section.Content.repeaters.length >= 8"
        >
          Add Item
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["section"],
  methods: {
    updateContent: function (id, property, value) {
      this.$store.commit("updateContent", {
        section: this.section,
        element: id,
        property: property,
        value: value,
      });
    },
    addItem: function () {
      this.$store.commit("addItem", {
        section: this.section,
        element: "repeaters",
      });
    },
    removeItem: function (index) {
      this.$store.commit("removeItem", {
        section: this.section,
        element: "repeaters",
        index: index,
      });
    },
  },
  computed: {},
  mounted() {},
};
</script>