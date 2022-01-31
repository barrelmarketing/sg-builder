<template>
  <div class="preview">
    <!-- HERO -->
    <Hero1
      :content="pagecomponents.Hero.Content"
      v-if="pagecomponents.Hero.Style.Selected == 'HeroStyle1'"
    />
    <Hero2
      :content="pagecomponents.Hero.Content"
      v-if="pagecomponents.Hero.Style.Selected == 'HeroStyle2'"
    />
    <!-- END HERO -->

    <!-- CONTENT 1 -->
    <Content1
      :content="pagecomponents.Content1.Content"
      v-if="pagecomponents.Content1.Style.Selected == 'ContentStyle1'"
    />
    <Content2
      :content="pagecomponents.Content1.Content"
      v-if="pagecomponents.Content1.Style.Selected == 'ContentStyle2'"
    />
    <!-- END CONTENT 1 -->

    <StatCounter
      :content="pagecomponents.CounterSection.Content"
      v-if="pagecomponents.CounterSection.Style.Selected == 'CounterSection1'"
    />

    <!-- <Cards2 :content="this.FooterSection" /> -->
    <ContactUs
      :content="this.ContactSection"
      v-if="pagecomponents.ContactSection.Style.Selected == 'ContactSection1'"
    />
    <Footer1
      :content="this.FooterSection"
      v-if="pagecomponents.FooterSection.Style.Selected == 'FooterSection1'"
    />
  </div>
</template>

<script>
export default {
  name: "PreviewPage",
  props: ["pagecomponents"],
  data() {
    return {
      ContactSection: {
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
      FooterSection: {
        title: "footer",
        bodyText:
          "We are committed to providing you with the freshest produce from local farmers and producers. We keep costs down through the relationships forged with our suppliers.",
      },
    };
  },
  mounted() {
    console.log("loaded preview:", this.pagecomponents);
  },
};
</script>
