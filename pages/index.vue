<template>
  <div>
    <Navbar />
    <!-- Hero -->
    <section
      :id="section.id"
      class="hero px-0 container-fluid content bg-success text-white"
    >
      <div class="row justify-content-center">
        <div
          class="
            col-md-5 col-xl-4
            my-5 my-md-auto
            pt-5
            py-md-0
            text-center text-md-start
          "
        >
          <div class="container w-md-75 mx-auto px-0">
            <h1 class="fw-bold">Build your site today.</h1>
            <h3>It only takes 5 minutes!</h3>
            <a href="builder" type="button" class="btn btn-light btn-lg mt-3"
              >Build My Site</a
            >
          </div>
        </div>
        <div
          class="col-md-4 col-lg-2 col-lg-3 text-start siteExample"
          data-aos="fade-up"
        >
          <img
            src="preview-site1.jpg"
            alt=""
            class="shadow rounded img-fluid"
            data-rellax-mobile-speed="1"
          />
        </div>
      </div>
    </section>

    <!-- Builder Main -->
    <!-- <BuilderMain /> -->
  </div>
</template>

<script>
import Rellax from "rellax";

export default {
  name: "IndexPage",

  mounted() {
    var isMobile = screen.availWidth < 860;
    if (isMobile) {
      // console.log("Mobile");
      if (rellax) {
        rellax.destroy();
      }
    } else {
      // console.log("Desktop");
      var rellax = new Rellax(".siteExample img", {
        speed: 4,
        // center: true,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false,
      });
    }
  },
};
</script>

<style type="text/scss">
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}
.siteExample img {
  /* width: max(200px, 25vw); */
  max-width: 350px;
  margin-bottom: min(-100px, -3vw);
  margin-top: max(3vw, 150px);
  z-index: 0;
}
@media (max-width: 768px) {
  .siteExample img {
    /* width: max(350px, 100%); */
    max-width: max(550px, 90vw);
    margin-bottom: 0;
    margin-top: 0;
  }
}
.siteExample {
  z-index: 0;
}
</style>