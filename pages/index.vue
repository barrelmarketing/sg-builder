<template>
  <div>
    <header>
      <div class="container">
        <nav
          class="
            navbar navbar-expand-lg navbar-light
            bg-white
            fixed-top
            shadow-sm
            px-4
          "
        >
          <a class="navbar-brand h2" href="#"> Shotgun Sites </a>

          <ul class="nav mx-auto d-none d-lg-flex">
            <li class="nav-item">
              <a class="nav-link" href="#">How it Works</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Themes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Pricing</a>
            </li>
          </ul>

          <button type="button" class="btn btn-success">Build a Site</button>
        </nav>
      </div>
    </header>
    <!-- Hero -->
    <article class="hero px-0 container-fluid content bg-success text-white">
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
            <a
              href="#builderSection"
              type="button"
              class="btn btn-light btn-lg mt-3"
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
    </article>

    <!-- Builder Main -->

    <main
      class="builder container content bg-white"
      id="builderSection"
      data-aos="fade-in"
    >
      <!-- HEADER ROW -->
      <div class="row py-5 my-5">
        <div class="col-12 col-md-8 col-xl-6 ms-xl-auto p-5">
          <BuilderAccordion
            :sections="PageComponents"
            @save="saveSection"
            @selected="selectSection"
          />
        </div>
        <div
          class="
            col-12 col-md-4 col-xl-6
            me-xl-auto
            bg-light
            border-left border-dark
            p-0
            pb-3
            position-sticky
            sticky-top
          "
        >
          <BuilderPreview style="zoom: 45%" :pagecomponents="PageComponents" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Rellax from "rellax";

export default {
  name: "IndexPage",

  data() {
    return {
      PageComponents: {
        Hero: {
          id: "Hero",
          Style: {
            Show: "show",
            Collapsed: "",
            Selected: "",
            BuilderText: "Step 1: Build Your Header",
            Options: [
              {
                value: "HeroStyle1",
                label: "Left Aligned",

                align: "start",
                placeholders: [
                  "placeholder col-11",
                  "placeholder col-8",
                  "placeholder bg-white col-4",
                  "placeholder bg-success col-5",
                ],
              },
              {
                value: "HeroStyle2",
                label: "Centered",
                align: "center",
                placeholders: [
                  "placeholder col-11",
                  "placeholder col-8",

                  "placeholder bg-success col-5",
                ],
              },
            ],
          },
          Content: {
            title: {
              text: "Fresh and on-time.",
              label: "Title",
              size: "h1",
              options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            },
            subtitle: {
              text: "Get produce delivered today.",
              label: "Subtitle",
              size: "h3",
              options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            },
            buttonText: {
              text: "Tell Me More",
              label: "Button Text",
              size: "md",
              options: ["lg", "md", "sm"],
            },
            buttonLink: {
              text: "#contact",
              label: "Button Link",
              // options: ["#contact", "#about", "#services"],
            },
          },
        },
        Content1: {
          id: "Content1",
          Style: {
            Show: "",
            Selected: "",
            Collapsed: "collapsed",
            BuilderText: "Step 2: Your First Content Section",
            Options: [
              {
                value: "ContentStyle1",
                label: "Single Column",
                align: "center ",
                placeholders: [
                  "placeholder col-8",
                  "placeholder col-7",

                  "placeholder col-6",
                ],
              },
              {
                value: "ContentStyle2",
                label: "Two Columns",
                align: "start",
                placeholders: [
                  "placeholder col-5",
                  "placeholder bg-white col-1",
                  "placeholder col-5 2",
                  "placeholder bg-white col-1 2",
                  "placeholder col-5 3",
                  "placeholder bg-white col-1 3",
                  "placeholder col-5 4",
                  "placeholder bg-white col-1 4",
                  "placeholder col-5 5",
                  "placeholder bg-white col-1 5",
                  "placeholder col-5 6",
                  "placeholder bg-white col-1 6",
                ],
              },
            ],
          },
          Content: {
            title: {
              text: "Affordable, Local, Organic",
              label: "Title",
              size: "h2",
              options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            },
            bodyText: {
              text: "We are committed to providing you with the freshest produce from local farmers and producers. We keep costs down through the relationships forged with our suppliers.",
              label: "Text",
              size: "h3",
              options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            },
            buttonText: {
              text: "Tell Me More",
              label: "Button Text",
              size: "md",
              options: ["lg", "md", "sm"],
            },
            buttonLink: {
              text: "#contact",
              label: "Button Link",
            },
          },
        },
        CounterSection: {
          id: "CounterSection",
          Style: {
            Show: "",
            Selected: "",
            Collapsed: "collapsed",
            BuilderText: "Step 3: Show Off Your Numbers",

            Options: [
              {
                value: "CounterSection1",
                label: "Centered",
                align: "center ",
                placeholders: [
                  "placeholder col-3",
                  "placeholder col-1 bg-white",
                  "placeholder col-3 2",
                  "placeholder col-1 bg-white 2",
                  "placeholder col-3 3",
                ],
              },
            ],
          },
          Content: {
            title: {
              text: "Affordable, Local, Organic",
              label: "Title",
              size: "h2",
              options: ["h1", "h2", "h3", "h4", "h5", "h6"],
            },
            items: [
              {
                text: "Deliveries",
                value: "1000+",
                size: "h3",
                options: ["h1", "h2", "h3", "h4", "h5", "h6"],
              },
              {
                text: "Farmers & Producers",
                value: 560,
                size: "h3",
                options: ["h1", "h2", "h3", "h4", "h5", "h6"],
              },
              {
                text: "Happy Customers",
                value: "5000+",
                size: "h3",
                options: ["h1", "h2", "h3", "h4", "h5", "h6"],
              },
            ],
          },
        },
        ContactSection: {
          id: "ContactSection",
          Style: {
            Selected: "",
            Show: "",
            Collapsed: "collapsed",
            BuilderText: "Step 4: How will your customers reach you?",

            Options: [
              {
                value: "ContactSection1",
                label: "Left Aligned",
              },
              {
                value: "ContactSection2",
                label: "Centered",
              },
            ],
          },
          Content: {
            title: "Contact Us",
            bodyText:
              "We are committed to providing you with the freshest produce from local farmers and producers. We keep costs down through the relationships forged with our suppliers.",
            formFields: [
              {
                label: "First Name",
                type: "text",
                name: "FirstName",
                placeholder: "Enter your name",
                width: "50%",
                required: true,
              },
              {
                label: "Last Name",
                type: "text",
                name: "LastName",
                placeholder: "Enter your last name",
                width: "50%",
                required: true,
              },
              {
                label: "Email",
                type: "email",
                name: "Email",
                placeholder: "Enter your email",
                width: "50%",
                required: true,
              },
              {
                label: "Phone",
                type: "tel",
                name: "Phone",
                placeholder: "Enter your phone number",
                width: "50%",
                required: false,
              },
              {
                label: "Message",
                type: "textarea",
                name: "Message",
                placeholder: "Enter your message",
                width: "100%",
                required: false,
              },
            ],
          },
        },
        FooterSection: {
          id: "FooterSection",
          Style: {
            Show: "",
            Selected: "",
            Collapsed: "collapsed",
            Options: [
              {
                value: "FooterSection1",
                label: "Left Aligned",
              },
              {
                value: "FooterSection2",
                label: "Centered",
              },
            ],
          },
          Content: {
            title: "Footer",
            bodyText:
              "We are committed to providing you with the freshest produce from local farmers and producers. We keep costs down through the relationships forged with our suppliers.",
          },
        },
      },
    };
  },
  methods: {
    saveSection(section) {
      var vm = this;
      var index = Object.keys(this.PageComponents).indexOf(section.id);

      this.PageComponents[section.id].Style = Object.assign(
        {},
        this.PageComponents[section.id].Style,
        {
          Show: "",
          Collapsed: "collapsed",
        }
      );

      var index2 = index + 1;

      var newSection =
        this.PageComponents[Object.keys(this.PageComponents)[index2]];

      this.PageComponents[Object.keys(this.PageComponents)[index2]].Style =
        Object.assign({}, newSection.Style, {
          Show: "show",
          Collapsed: "",
        });
      console.log("index:", index, "opening:", index2);
      console.log(this.PageComponents);
    },

    selectSection(section) {
      var vm = this;
      var index = Object.keys(this.PageComponents).indexOf(section.id);

      this.PageComponents[section.id].Style = Object.assign(
        {},
        this.PageComponents[section.id].Style,
        {
          Show: "show",
          Collapsed: "",
        }
      );
    },
  },
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
  /* max-width: 350px; */
  margin-bottom: min(-100px, -3vw);
  margin-top: max(3vw, 150px);
}
@media (max-width: 768px) {
  .siteExample img {
    /* width: max(350px, 100%); */
    /* max-width: 550px; */
    margin-bottom: 0;
    margin-top: 0;
  }
}
</style>