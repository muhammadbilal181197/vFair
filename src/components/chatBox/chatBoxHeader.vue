<template>
    <div class="headerBlockChat">
        <div class="leftBlock">
            <img src="../../assets/icons/chatbox/sophie1.svg" alt="character icon">
            <h2 class="heading">Sophie Okonedo</h2>
            <img src="../../assets/icons/chatbox/icon.svg" alt="icon">
        </div>
        <div class="rightBlock">
            <div v-for="icon in IconBlock">
                <img :src="icon" alt="icon">
            </div>
        </div>
    </div>
</template>

<script>
import Icon1 from "../../assets/icons/chatbox/phone.svg"
import Icon2 from "../../assets/icons/chatbox/video.svg"
import Icon3 from "../../assets/icons/chatbox/dot.svg"
import Icon4 from "../../assets/icons/chatbox/info.svg"
export default {
    name: 'ChatBoxHeader',
    components: {
    },
    setup() {
        const IconBlock = [Icon1, Icon2, Icon3, Icon4];
        return { IconBlock }
    }
};
</script>
<style scoped>
.leftBlock {
    display: flex;
    column-gap: 12px;
    align-items: center;
}

.heading {

    font-family: 'Avenir';
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0px;
    color: #344054;
}

.headerBlockChat {
    display: flex;
    justify-content: space-between;
    padding: 21px 16px;
    border-bottom: 1px solid #DFE2E8;

    @media (max-width:475px) {
        flex-direction: column;
        row-gap: 30px;
    }

}

.rightBlock {
    display: flex;
    column-gap: 16px;

    @media (max-width:475px) {
        justify-content: space-between;
    }
}
</style>
