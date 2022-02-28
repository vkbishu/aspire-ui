<template>
<div class="wrapper layout-tab">
    <side-bar @toggle-menu="onToggleCollapse" :menu="menu" ref="sidebar"></side-bar>
    <main class="main" :class="{'collapsed': isCollapsed}">
        <div class="container">
            <slot></slot>
        </div>
    </main>
    <div class="footer">
        <div class="tabs d-flex align-items-center justify-content-around text-center p-2">
            <IconMenu
                icon="Logo-1.svg"
                active-icon="Logo.svg"
                label="Home"
                :is-active="false"
            />
            <IconMenu
                icon="pay.svg"
                active-icon="pay.svg"
                label="Cards"
                :is-active="true"
            />
                <IconMenu 
                icon="77cfcfe5525d392a91457d5e35b0352c.svg"
                label="Payments"
                :is-active="false"
            />
            <IconMenu 
                icon="Credit.svg"
                label="Credit"
                active-icon="Credit.svg"
                :is-active="false"
            />
            <IconMenu 
                icon="user.svg"
                label="Profile"
                active-icon="user-1.svg"
                :is-active="false"
            />
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import SideBar from './SideBar';
import IconMenu from "@/components/IconMenu"
export default {
    name: "BaseLayout",
    components: {
        SideBar,
        IconMenu,
    },
   data() {
        return {
           isCollapsed: false,
        }
    },
    computed: {
        ...mapState(['menu']),
    },
    methods: {
        onToggleCollapse(collapsed) {
            // add collapsed class to .main 
            // add a transition effect on .main class when coll
            this.isCollapsed = collapsed;
        },
        toggleSidebar(){
           this.$refs.sidebar.menuToggle();
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
   //margin-left: 17rem;
    &.collapsed {
        margin-left: 4rem;
    }
    transition: 0.3s margin-left ease;
}

// mobile
.layout-tab {
   padding-bottom: 55px;
}
.footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    z-index: 99;
    display: none;
}

// tabs
.tabs {
    background: #fff;
    box-shadow: 0px -3px 6px #00000014;
}

// responsive

// mobile device
@media (max-width: 575.98px) {
    .footer{
        display: block;
    }
    .container {
        padding: 0;
    }
}

// pc and tablets
@media (min-width: 1200px) { 
    .footer {
        display: none;
    }
    .main {
        margin-left: 20rem;
    }
    .sidebar {
        display: block;
    }
}
</style>