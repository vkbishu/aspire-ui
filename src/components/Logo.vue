<template>
    <img src="@/assets/icons/Aspire-Logo.svg" alt="" v-if="type === 'desktop'">
    <img src="@/assets/icons/Logo.svg" alt="" v-else>
</template>

<script>
export default {
    name: "Logo",
    props: ['type']
}
</script>