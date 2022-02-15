<template>
  <section :id="section.id" class="content container-fluid py-5 gx-0">
    <BuilderToolbar :section="section" />

    <div class="row justify-content-center g-5">
      <div class="col-8 py-3 text-center">
        <h2 :class="section.Content.heading.size">
          {{ section.Content.heading.text }}
        </h2>
        <p :class="section.Content.bodyText.size">
          {{ section.Content.bodyText.text }}
        </p>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-10 col-lg-8 col-xl-6">
        <form>
          <div class="row">
            <div
              class="mb-3 sg-form-item"
              v-for="item in section.Content.formFields"
              :key="item.name"
              :style="'width:' + item.width"
            >
              <label :for="item.name" class="form-label">{{
                item.label
              }}</label>
              <input
                v-if="item.type != 'textarea'"
                type="text"
                class="form-control"
                :placeholder="item.placeholder"
              />
              <textarea
                v-if="item.type == 'textarea'"
                type="text"
                class="form-control"
                :placeholder="item.placeholder"
              ></textarea>
            </div>
          </div>
          <div class="row mb-3">
            <div class="form-check mb-3">
              <input
                type="checkbox"
                class="form-check-input"
                id="MailingListConfirmation"
              />
              <label class="form-check-label" for="MailingListConfirmation"
                >I understand that my email address may be used for promotional
                purposes</label
              >
            </div>
          </div>
          <button type="submit" class="btn btn-lg btn-success">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["section"],
};
</script>