<template>
    <div class="tab-menu-item" :class="[isActive ? getActiveClass : '', display && display == 'inline'? 'inline': '']">
        <div class="icon">
            <img :src="require('@/assets/icons/'+icon)" alt="" class="default">
            <img :src="require('@/assets/icons/'+getActiveIcon)" alt="" class="active">
        </div>
        <div class="text" :style="getStyle">{{label}}</div>
    </div>
</template>

<script>
export default {
    name: "IconMenu",
    props: ['icon', 'label', 'display', 'activeIcon', 'isActive', 'iconSize', 'activeClass', 'fontSize'],
    computed: {
        getActiveIcon(){
            return this.activeIcon ? this.activeIcon : this.icon;
        },
        getActiveClass(){
            return this.activeClass ? this.activeClass + ' active' : 'active';
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

    &.active {
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
</style>