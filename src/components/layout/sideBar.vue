<!-- SideBar Component and code -->
<template>
    <div class="d-flex sidebarHeader">
        <div class=" sideBar_Block">
            <div class="sideBar_Parent d-flex flex-column">
                <div class="active_block d-flex flex-column align-items-center justify-content-center">
                    <img src="@/assets/icons/sidebar/chat.svg" alt="chatIcon" class="active_icon">
                    <h2 class="active_title title">Chats</h2>
                </div>
                <div class="inActive_block d-flex flex-column align-items-center justify-content-center">
                    <img src="@/assets/icons/sidebar/people.svg" alt="chatIcon" class="active_icon">
                    <h2 class="inActive_title title">People</h2>
                </div>
                <div class="inActive_block d-flex flex-column align-items-center justify-content-center">
                    <img src="@/assets/icons/sidebar/room.svg" alt="chatIcon" class="active_icon">
                    <h2 class="inActive_title title">Rooms</h2>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "../layout/header.vue"
import { RouterView } from "vue-router";
export default {
    name: 'SideBar',
    component: {
        Header
    }
}
</script>

<style scoped>
.sidebarHeader {
    @media (max-width:1439px) {
        flex-direction: column;
    }
}

.sideBar_Parent {
    width: 72px;
    min-height: 100%;
    border-right: 1px solid #DFE2E8;
    row-gap: 8px;

    @media (max-width:1439px) {
        min-height: auto;
        width: 100%;
        flex-direction: row !important;
        justify-content: center;
        border-right: 0px;
    }
}

.active_block {
    border-right: 2px solid #F36531;
    background-color: #FEF0EA;
    row-gap: 8px;
    padding: 8px 0px;

    @media (max-width:1439px) {
        width: 72px;
        border-right: 0px;
        border-bottom: 2px solid #F36531;
    }
}

.inActive_block {
    padding: 8px 0px;
    row-gap: 8px;

    @media (max-width:1439px) {
        width: 72px;
    }
}

.title {
    font-family: 'Avenir';
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0px;
}

.active_title {

    color: #F36531;
}

.inActive_title {
    color: #5F6269;
}
</style>