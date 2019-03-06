<template>
  <vk-navbar>
    <vk-navbar-nav slot="center-left">
      <vk-navbar-nav-item title="Login" href="/#/login"></vk-navbar-nav-item>
      <vk-navbar-nav-item title="Main" href="/#/"></vk-navbar-nav-item>
      <vk-navbar-nav-dropdown title="Profile">
        <vk-navbar-nav-dropdown-nav>
          <vk-nav-item title="My profile" active></vk-nav-item>
          <vk-nav-item title="Doctors"></vk-nav-item>
          <vk-nav-item title="Appointments"></vk-nav-item>
        </vk-navbar-nav-dropdown-nav>
      </vk-navbar-nav-dropdown>
    </vk-navbar-nav>

    <vk-navbar-logo slot="center" src="assets/main.jpg"></vk-navbar-logo>

    <vk-navbar-nav slot="center-right">
      <vk-navbar-nav-item title="Register" href="/#/register"></vk-navbar-nav-item>
    </vk-navbar-nav>
  </vk-navbar>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.uk-navbar-container:not(.uk-navbar-transparent) {
    background: #ffffff;
}
element.style {
    height: 0px;
    margin: 0px;
}
.uk-navbar-center {
    margin-left: 13%;
}
</style>
