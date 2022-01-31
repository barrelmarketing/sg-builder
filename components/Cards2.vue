<template>
  <article class="content container-fluid py-5" data-aos="fade-in">
    <div class="row justify-content-center g-5">
      <div class="col-8 py-3 text-center">
        <h2 class="fw-bold">Our Features</h2>
        <p>
          Et ipsum nostrud id officia do magna nulla elit reprehenderit mollit
          duis aliqua nisi officia. Id ea voluptate officia reprehenderit est
          consequat ex consequat. Ut est consectetur eu et nulla aliqua nostrud
          ad quis consequat.
        </p>
      </div>
    </div>

    <div
      class="
        row
        mb-4
        justify-content-md-center
        scroll-row
        flex-row flex-nowrap
        gap-3
      "
    >
      <div class="card" data-aos="-flip-up">
        <img
          src="https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=500"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title fw-bold">Farm to Table</h5>
          <p class="card-text">
            Id ea voluptate officia reprehenderit est consequat ex consequat.
          </p>
          <a href="#" class="card-link">Learn More</a>
        </div>
      </div>
      <div class="card" data-aos="-flip-up">
        <img
          src="https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=500"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title fw-bold">Part of a Healthy Lifestyle</h5>
          <p class="card-text">
            Id ea voluptate officia reprehenderit est consequat ex consequat.
          </p>
          <a href="#" class="card-link">Learn More</a>
        </div>
      </div>
      <div class="card" data-aos="-flip-up">
        <img
          src="https://images.pexels.com/photos/4392043/pexels-photo-4392043.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=500"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title fw-bold">Convenient & Quick</h5>
          <p class="card-text">
            Id ea voluptate officia reprehenderit est consequat ex consequat.
          </p>
          <a href="#" class="card-link">Learn More</a>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["content"],
};
</script>