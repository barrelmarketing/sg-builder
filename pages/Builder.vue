<template>
  <div>
    <Navbar v-if="$store.state.CompletionStatus==false" />
    <!-- Builder Main -->
    <BuilderMain v-if="$store.state.CompletionStatus==false" />
    <!-- preview/proof -->
    <BuilderProof v-if="$store.state.CompletionStatus==true" />
  </div>
</template>

<script>
export default {
  name: "BuilderPage",
};
</script>

<style type="text/scss">
</style>