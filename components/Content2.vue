        <template>
  <section :id="section.id" class="content container gx-0" data-aos="fade-in">
    <BuilderToolbar :section="section" />

    <div
      class="row justify-content-center p-0 gx-sm-5 text-center text-lg-start"
    >
      <div
        class="
          col-12 col-sm-10 col-lg-6
          p-lg-5 p-xl-3
          my-auto
          justify-content-center justify-content-lg-end
        "
      >
        <img
          class="img-fluid shadow rounded mr-lg-3"
          src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
      </div>
      <div
        class="
          col col-sm-10 col-lg-6
          text-shadow
          align-items-center
          my-auto
          p-5
          ml-xl-5
        "
      >
        <i class="fas fa-carrot fa-4x mb-4 text-danger"></i>
        <h2 class="pb-2 fw-bold">{{ section.Content.title.text }}</h2>
        <p>
          {{ section.Content.bodyText.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["section"],
};
</script>

<style scoped>
section img {
  max-height: max(500px, 18vw);
  z-index: 1;
}

@media (max-width: 960px) {
  section img {
    margin-top: -2em;
  }
}
</style>