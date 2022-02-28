<template>
    <div class="layout-tab">
        <slot></slot>
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
import IconMenu from "@/components/IconMenu"
export default {
    name: "LayoutMobileTab",
    components: {
        IconMenu
    }
}
</script>

<style lang="scss" scoped>
.layout-tab {
   padding-bottom: 55px;
}
.footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    z-index: 99;
}

// tabs
.tabs {
    background: #fff;
    box-shadow: 0px -3px 6px #00000014;
}

</style>