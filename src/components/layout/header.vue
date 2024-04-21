<template>
    <div class="header_Parent d-flex justify-content-between">
        <div class="logo">
            <img src="@/assets/icons/header/logo.svg" alt="logo Icon">
        </div>
        <div class="icons_Block d-flex align-items-start">
            <div class="icon d-flex justify-content-center align-items-center " v-for="icon in IconBlock">
                <img :src="icon" alt="annouceIcon" class="icon_class">
            </div>
            <img src="@/assets/icons/header/icon4.svg" alt="bellIcon" class="icon_class">
        </div>
    </div>
</template>

<script>

import Icon1 from "../../assets/icons/header/icon1.svg"
import Icon2 from "../../assets/icons/header/icon2.svg"
import Icon3 from "../../assets/icons/header/icon3.svg"
export default {
    name: 'Header',
    components: {
    },
    setup() {
        const IconBlock = [Icon1, Icon2, Icon3];
        return { IconBlock }
    }
};

</script>
<style scoped>
.header_Parent {
    padding: 8px 32px;
    border-bottom: 1px solid #DFE2E8;
    @media (max-width:575px) {
        padding: 8px 10px;
    }
}

.icons_Block {
    column-gap: 8px;
}

.icon {
    width: 40px;
    height: 40px;
    background-color: #F0F2F6;
    border-radius: 100px;
}
</style>