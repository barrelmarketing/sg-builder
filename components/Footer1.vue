    <template>
  <footer class="container-fluid bg-light d-flex align-items-center">
    <BuilderToolbar :section="section" />

    <div class="row">
      <div class="col-10 col-lg-8 mx-auto text-center h-100">
        <h2 class="fw-bold">{{ section.Content.title }}</h2>
        <p class="lead">{{ section.Content.bodyText }}</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: ["section"],
};
</script>