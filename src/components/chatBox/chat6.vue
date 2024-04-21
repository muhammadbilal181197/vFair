<template>
    <div class="chat1Head">
        <div>
            <img src="../../assets/icons/chatbox/chat2.svg" alt="chat icon">
        </div>
        <div class="bottomChat">
            <div class="nameBlock">
                <h2 class="name">Sophie Okonedo</h2>
                <p class="textTime">7 min ago</p>
            </div>
            <div class="chatBlock">
                <h3 class="youText">You</h3>
                <p class="text2">“Hey Sophe! Yes I got tickets. Super Excited”</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Chat6',
    components: {
    }
};
</script>
<style scoped>
.chat1Head {
    margin: 24px 24px 32px 24px;
   
    display: flex;
    column-gap: 8px;
}

.nameBlock {
    display: flex;
    column-gap: 8px;
}

.name {

    font-family: 'Avenir';
    font-weight: 800;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 0px;
    color: #5F6269;

}

.textTime {
    font-family: 'Avenir';
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    color: #5F6269;
    margin-bottom: 0px;
}

.chatBlock {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px 12px;
    width: 354px;
    min-height: 62px;
    background: #F0F2F6;
    border-radius: 2px 8px 0px 0px;
    @media (max-width:767px) {
        width: auto;
    }
}

.text2 {
    font-family: 'Avenir';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 0px;
    color: #5F6269;


}

.bottomChat {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
}

.youText {

    font-family: 'Avenir';
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 6px;
}
</style>
