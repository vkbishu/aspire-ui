<template>
<div class="wrapper layout-tab">
    <side-bar :menu="menu" ref="sidebar"></side-bar>
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
                href="/home"
            />
            <IconMenu
                icon="pay.svg"
                active-icon="pay.svg"
                label="Cards"
                href="/cards"
            />
                <IconMenu 
                icon="77cfcfe5525d392a91457d5e35b0352c.svg"
                label="Payments"
                href="/payments"
            />
            <IconMenu 
                icon="Credit.svg"
                label="Credit"
                active-icon="Credit.svg"
                href="/credit"
            />
            <IconMenu 
                icon="user.svg"
                label="Profile"
                active-icon="user-1.svg"
                href="/profile"
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
@media (min-width: 768px) { 
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