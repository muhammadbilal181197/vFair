<template>
    <div class="BottomBlockChat">
        <div class="textBlock">
            <p class="textline">Message to Sophie | Away for one hour</p>
        </div>
        <div class="iconBlock">
            <div class="IconLeft">
                <div v-for="icon in IconBlock">
                    <img :src="icon" alt="icon">
                </div>
            </div>
            <div class="IconRight">
                <img src="../../assets/icons/chatbox/bottomIcon/icon9.svg" alt="Icon">
                <img src="../../assets/icons/chatbox/bottomIcon/icon10.svg" alt="Icon">
            </div>
        </div>
    </div>
</template>

<script>
import Icon1 from "../../assets/icons/chatbox/bottomIcon/icon1.svg"
import Icon2 from "../../assets/icons/chatbox/bottomIcon/icon2.svg"
import Icon3 from "../../assets/icons/chatbox/bottomIcon/icon3.svg"
import Icon4 from "../../assets/icons/chatbox/bottomIcon/icon4.svg"
import Icon5 from "../../assets/icons/chatbox/bottomIcon/icon5.svg"
import Icon6 from "../../assets/icons/chatbox/bottomIcon/icon6.svg"
import Icon7 from "../../assets/icons/chatbox/bottomIcon/icon7.svg"
import Icon8 from "../../assets/icons/chatbox/bottomIcon/icon8.svg"

export default {
    name: 'ChatBoxBottom',
    components: {
    },
    setup() {
        const IconBlock = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8];
        return { IconBlock }
    },

};
</script>
<style scoped>
.BottomBlockChat {

    filter: drop-shadow(0px -4px 8px rgba(0, 0, 0, 0.08));

    @media (max-width:1439px) {
        border-bottom: 1px solid #DFE2E8;

    }

}

.textBlock {
    display: flex;
    align-items: center;
    padding: 16px;
    background: #FFFFFF;
    border-top: 1px solid #DFE2E8;
}

.textline {

    font-family: 'Avenir';
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 0px;
    color: #B5B8BE;
}

.iconBlock {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 4px 16px;
    background: #FFFFFF;
    border-top: 1px solid #DFE2E8;
}

.IconLeft,
.IconRight {
    display: flex;
    column-gap: 4px;
}
</style>
