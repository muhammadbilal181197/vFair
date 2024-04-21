<template>
    <Header />
    <sideBar />
</template>

<script>
import sideBar from "@/components/layout/sideBar.vue";
import Header from "../components/layout/header.vue"
export default {
    name: 'MainPage',
    components: {
        sideBar, Header
    }
};
</script>
<style></style>
