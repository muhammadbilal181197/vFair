<template>
    <div class="chat1Head">
        <div>
            <img src="../../assets/icons/chatbox/chat2.svg" alt="chat icon">
        </div>
        <div class="bottomChat">
            <div class="nameBlock">
                <h2 class="name">Sophie Okonedo</h2>
                <p class="textTime">9:30 AM</p>
            </div>
            <div class="chatBlock">
                <p class="text2">Hey Samir! Are you going to the concert tomorrow night?</p>
                <div class="emoji">🥳</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Chat4',
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
    flex-direction: row;
    align-items: flex-start;
    padding: 4px 12px;
    width: 443px;
    min-height: 32px;
    background: #DFE2E8;
    border-radius: 2px 8px 8px 8px;
    position: relative;
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
    color: #1B1F29;

}

.bottomChat {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
}

.emoji {
    position: absolute;
    right: 12px;
    top: 24px;
    width: 24px;
    height: 24px;
    border-radius: 100px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
