<template>
  <div class="sidebar" :class="{ collapsed: is_collapsed }">
    <div class="sidebar-logo pt-4 pb-4">
        <Logo type="desktop"/>
      </div>
      <p style="color:rgb(255 255 255 / 47%)">Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
      <router-link  to="/" class="menu-item">
      <IconMenu
            icon="Logo-1.svg"
            active-icon="Logo.svg"
            label="Home"
            :is-active="false"
            display="inline"
            font-size="1rem"
        />
      </router-link>
      <router-link to="/cards" class="menu-item" v-slot="{ isActive }">
        <IconMenu
            icon="pay.svg"
            active-icon="pay.svg"
            label="Cards"
            :is-active="isActive"
            display="inline"
            font-size="1rem"
        />
        </router-link>
        <router-link to="/payments" class="menu-item" v-slot="{ isActive }">
          <IconMenu
              icon="77cfcfe5525d392a91457d5e35b0352c.svg"
              label="Payments"
              :is-active="isActive"
              display="inline"
              font-size="1rem"
          />
        </router-link>
        <router-link to="/credit" class="menu-item" v-slot="{ isActive }"
          custom>
          <IconMenu
              icon="Credit.svg"
              label="Credit"
              active-icon="Credit.svg"
              :is-active="isActive"
              display="inline"
              font-size="1rem"
          />
        </router-link>
        <router-link to="/profile" class="menu-item">
          <IconMenu
              icon="user.svg"
              label="Profile"
              active-icon="user-1.svg"
              :is-active="false"
              display="inline"
              font-size="1rem"
          />
        </router-link>
      <!-- <div class="list-group">
        <router-link
          v-for="(item, index) of menu"
          :key="index"
          :to="item.href"
          v-slot="{ href, navigate, isActive, isExactActive }"
          custom
          class="d-block position-relative main-menu"
        >
          <a
            :href="href"
            class="list-group-item menu-item"
            :class="{ 'router-link-active': isActive }"
            @click="navigate"
            ><span v-html="all_icons[item.icon]" class="sidebar-icon"></span>
            <span class="menu-text">{{ item.title }}</span></a
          >
          <div class="list-group child-menu" :class="{ active: isActive }" v-if="item.child">
            <router-link
              v-for="(child_item, child_index) of item.child"
              :key="child_index"
              :to="child_item.href"
              class="list-group-item"
              :class="{ active: isExactActive }"
              >{{ child_item.title }}</router-link
            >
          </div>
        </router-link>
      </div> -->
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
  &.collapsed {
    overflow-y: visible;
    .ps {
        overflow: visible !important;
    }
    width: 4rem;
    span.menu-text {
      display: none;
    }

    .sidebar-logo {
      img {
        padding: 6px;
      }
    }

    .child-menu {
        display: none !important;
        position: absolute;
        width: 230px;
        font-size: 0.9rem;
        top: 0px;
        left: 4rem;
        border: 1px solid #f7f3f3;
        border-radius: 0;
        .list-group-item {
            background-color: #fff;
            border-left: 5px solid transparent !important;
            &:hover{
                color: #fd6102 !important;
                background-color: #f3f3f3;
                border-left: 5px solid #fd6102 !important;
            }
            &.router-link-exact-active {
                background-color: #3f4c61;
                color: #fff !important;
            }
        }
    }

    .main-menu {
      &:hover {
        .child-menu {
          display: block !important;
        }
      }
    }
  }
}

.menu-item {
  display: block;
  padding: 1rem 0;
  text-decoration: none;
  font-size: 1.5rem;
}
</style>