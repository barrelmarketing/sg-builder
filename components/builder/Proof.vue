<template>
  <div class="proof d-flex flex-column justify-content-center">
    <!-- HERO -->
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
   
    <StatCounter
      :section="sections.CounterSection"
      v-if="sections.CounterSection.Style.Selected == 'CounterSection1'"
      v-show="!sections.CounterSection.Style.Deleted"
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
  name: "ProofPage",
  computed: {
    sections() {
      return this.$store.state.PageComponents;
    },
  },
};
</script>

<style type="text/scss">
</style>