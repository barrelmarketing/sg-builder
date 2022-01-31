    <template>
  <footer class="container-fluid bg-light d-flex align-items-center">
    <div class="row">
      <div class="col-10 col-lg-8 mx-auto text-center h-100">
        <h2 class="fw-bold">{{ content.title }}</h2>
        <p class="lead">{{ content.bodyText }}</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: ["content"],
};
</script>