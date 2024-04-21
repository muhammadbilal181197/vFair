<template>
    <div class="chat1Head">
        <div>
            <img src="../../assets/icons/chatbox/chat1.svg" alt="chat icon">
        </div>
        <div class="bottomChat">
            <div class="nameBlock">
                <h2 class="name">Sophie Okonedo</h2>
                <p class="textTime">9:30 AM</p>
            </div>
            <div class="chatBlock">
                <h3 class="text1">John <span class="text2">contacted you with</span> Sophie Okenodo</h3>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Chat1',
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
    width: 460px;
    min-height: 32px;
    background: #CEE1FD;
    border-radius: 2px 8px 8px 8px;

    @media (max-width:767px) {
        width: auto;
    }
}

.text1 {
    font-family: 'Avenir';
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    color: #0061F9;
    margin-bottom: 0px;
}

.text2 {
    font-weight: 400;
    color: #000;
}

.bottomChat {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
}
</style>
