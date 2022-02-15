<template>
  <section :id="section.id" class="content container-fluid mb-5">
    <BuilderToolbar :section="section" />

    <div class="row justify-content-center gx-5">
      <div class="col-4 p-5">
        <h2 :class="section.Content.title.size">
          {{ section.Content.title.text }}
        </h2>
      </div>

      <div class="col-8">
        <div class="row scroll-row flex-row flex-nowrap gap-3">
          <div class="card">
            <img
              src="https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">Farm to Table</h5>
              <p class="card-text">
                Id ea voluptate officia reprehenderit est consequat ex
                consequat.
              </p>
              <a href="#" class="card-link">Learn More</a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">Part of a Healthy Lifestyle</h5>
              <p class="card-text">
                Id ea voluptate officia reprehenderit est consequat ex
                consequat.
              </p>
              <a href="#" class="card-link">Learn More</a>
            </div>
          </div>
          <div class="card">
            <img
              src="https://images.pexels.com/photos/4392043/pexels-photo-4392043.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">Convenient & Quick</h5>
              <p class="card-text">
                Id ea voluptate officia reprehenderit est consequat ex
                consequat.
              </p>
              <a href="#" class="card-link">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["section"],
};
</script>