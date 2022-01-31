<template>
  <article class="content container py-5 gx-0" data-aos="fade-in">
    <div class="row justify-content-center g-5">
      <div class="col-8 py-3 text-center">
        <h2 class="fw-bold">Contact Us</h2>
        <p>
          Et ipsum nostrud id officia do magna nulla elit reprehenderit mollit
          duis aliqua nisi officia. Id ea voluptate officia reprehenderit est
          consequat ex consequat. Ut est consectetur eu et nulla aliqua nostrud
          ad quis consequat.
        </p>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-10 col-lg-8 col-xl-8">
        <form>
          <div class="row">
            <div
              class="mb-3 sg-form-item"
              v-for="item in content.formFields"
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
  </article>
</template>

<script>
export default {
  props: ["content"],
};
</script>