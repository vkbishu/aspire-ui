<template>
  <div class="sidebar" :class="{ collapsed: is_collapsed }">
    <div class="sidebar-logo pt-4 pb-4">
        <Logo type="desktop"/>
      </div>
      <p style="color:rgb(255 255 255 / 47%)">Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
        <IconMenu
            icon="Logo-1.svg"
            active-icon="Logo.svg"
            label="Home"
            display="inline"
            font-size="1rem"
            href="/home"
          />
          <IconMenu
            icon="pay.svg"
            active-icon="pay.svg"
            label="Cards"
            display="inline"
            font-size="1rem"
            href="/cards"
          />
     
         <IconMenu
              icon="77cfcfe5525d392a91457d5e35b0352c.svg"
              label="Payments"
              display="inline"
              font-size="1rem"
              href="/payments"
          />
          <IconMenu
              icon="Credit.svg"
              label="Credit"
              active-icon="Credit.svg"
              display="inline"
              font-size="1rem"
              href="/credit"
          />
        <IconMenu
            icon="user.svg"
            label="Profile"
            active-icon="user-1.svg"
            display="inline"
            font-size="1rem"
            href="/profile"
          />
  </div>
</template>
<script>
import IconMenu from "@/components/IconMenu";
import Logo from "@/components/Logo";
export default {
  name: "SideBar",
  props: ["menu"],
  components: {
    IconMenu,
    Logo
  },
  data() {
    return {
      is_collapsed: false,
    };
  },
  methods: {
    menuToggle() {
      this.is_collapsed = !this.is_collapsed;
      this.$emit("toggle-menu", this.is_collapsed);
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/_variables";
.sidebar {
  display: none;
  width: 20rem;
  background-color: $secondary;
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 100;
  top: 0;
  padding: 2rem;
  //box-shadow: 0px 1px 10px 1px #edebeb;
  transition: 0.3s width ease;
  //overflow-y: auto;
}
</style>