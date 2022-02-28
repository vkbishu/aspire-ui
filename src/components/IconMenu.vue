<template>
    <router-link :to="href" class="tab-menu-item" :class="[display && display == 'inline' ? 'menu-item inline': '']">
        <div class="icon">
            <img :src="require('@/assets/icons/'+icon)" alt="" class="default">
            <img :src="require('@/assets/icons/'+getActiveIcon)" alt="" class="active">
        </div>
        <div class="text" :style="getStyle">{{label}}</div>
    </router-link>
</template>

<script>
export default {
    name: "IconMenu",
    props: ['icon', 'label', 'display', 'activeIcon', 'iconSize', 'fontSize', 'href'],
    computed: {
        getActiveIcon(){
            return this.activeIcon ? this.activeIcon : this.icon;
        },
        getStyle(){
            return  {
                fontSize: this.fontSize ? this.fontSize : '',
            };
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/_variables";
.tab-menu-item {
    cursor: pointer;
    text-decoration: none;
    .icon {
        img {
            width: 24px;
            height: 24px;
            &.active {
                display: none;
            }
            &.default {
                display: inline-block;
            }
        }
    }

    .text {
        margin-top: 4px;
        font-size: 0.8rem;
        color: #DDDDDD;
    }

    &.active,&.router-link-active {
        img {
            &.active {
                display: inline-block;;
            }
            &.default {
                display: none;
            }
        }
        .text {
            color: $primary;
        }
    }

    &.inline {
        display: flex;
        align-items: center;
        .icon {
            margin-right: 1rem;
        }
    }
}

.menu-item {
    display: block;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 1rem 0;
}

</style>