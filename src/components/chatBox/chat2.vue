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
            <div class="actionBlockMain">
                <div class="chatBlock">
                    <p class="text2">Hi Alex! Have you heard about the upcoming <br>
                        virtual UX design event next month?</p>
                </div>
                <div class="actionBlock">
                    <img src="../../assets/icons/chatbox/smile.svg" alt="icon">
                    <img src="../../assets/icons/chatbox/undo.svg" alt="icon">
                    <img src="../../assets/icons/chatbox/dot2.svg" alt="icon">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Chat2',
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
    width: 456px;
    min-height: 56px;
    background: #DFE2E8;
    border-radius: 2px 8px 8px 8px;
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

.actionBlockMain {
    display: flex;
    align-items: center;
}
.actionBlock{
    display: flex;
    column-gap: 8px;
}
</style>
