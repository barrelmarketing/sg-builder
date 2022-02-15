<template>
  <div class="preview d-flex flex-column justify-content-center">
    <!-- HERO -->
    <Tempframe
      v-if="!sections.Hero.Style.Selected"
      v-show="!sections.Hero.Style.Deleted"
      :section="sections.Hero"
    />
    <Hero1
      :section="sections.Hero"
      v-if="sections.Hero.Style.Selected == 'HeroStyle1'"
      v-show="!sections.Hero.Style.Deleted"
    />
    <Hero2
      :section="sections.Hero"
      v-if="sections.Hero.Style.Selected == 'HeroStyle2'"
      v-show="!sections.Hero.Style.Deleted"
    />
    <!-- END HERO -->

    <!-- CONTENT 1 -->
    <Tempframe
      v-if="
        !sections.Content1.Style.Selected && !sections.Content1.Style.Deleted
      "
      :section="sections.Content1"
    />
    <Content1
      :section="sections.Content1"
      v-if="sections.Content1.Style.Selected == 'ContentStyle1'"
      v-show="!sections.Content1.Style.Deleted"
    />
    <Content2
      :section="sections.Content1"
      v-if="sections.Content1.Style.Selected == 'ContentStyle2'"
      v-show="!sections.Content1.Style.Deleted"
    />
    <!-- END CONTENT 1 -->
    <Tempframe
      v-if="!sections.CounterSection.Style.Selected"
      v-show="!sections.CounterSection.Style.Deleted"
      :section="sections.CounterSection"
    />

    <StatCounter
      :section="sections.CounterSection"
      v-if="sections.CounterSection.Style.Selected == 'CounterSection1'"
      v-show="!sections.CounterSection.Style.Deleted"
    />

    <Tempframe
      v-if="
        !sections.CardsSection.Style.Selected &&
        !sections.CardsSection.Style.Deleted
      "
      :section="sections.CardsSection"
    />
    <Cards1
      v-if="sections.CardsSection.Style.Selected == 'CardsSection1'"
      v-show="!sections.CardsSection.Style.Deleted"
      :section="sections.CardsSection"
    />
    <Cards2
      v-if="sections.CardsSection.Style.Selected == 'CardsSection2'"
      v-show="!sections.CardsSection.Style.Deleted"
      :section="sections.CardsSection"
    />

    <Tempframe
      v-if="!sections.ContactSection.Style.Selected"
      v-show="!sections.ContactSection.Style.Deleted"
      :section="sections.ContactSection"
    />
    <ContactUs
      :section="sections.ContactSection"
      v-if="sections.ContactSection.Style.Selected == 'ContactSection1'"
      v-show="!sections.ContactSection.Style.Deleted"
    />
    <!--    <Footer1
      :section="this.FooterSection"
      v-if="sections.FooterSection.Style.Selected == 'FooterSection1'"
    /> -->
  </div>
</template>

<script>
export default {
  name: "PreviewPage",
  props: ["sections"],
  data() {
    return {};
  },
  mounted() {
    console.log("loaded preview:", this.sections);
  },
  methods: {
    placeholderClicked(section) {
      this.$emit("placeholder-clicked", section);
      console.log("clicked", section);
    },
  },
};
</script>

