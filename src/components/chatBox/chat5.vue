<template>
    <div class="chat3Head">
        <div class="bottomChat">
            <div class="nameBlock">
                <h2 class="name">You</h2>
                <p class="textTime">9:30 AM</p>
            </div>
            <div class="IconBlock">
                <img src="../../assets/icons/chatbox/img.svg" alt="img" class="mainImg">
                <div class="chatBlock">
                    <p class="text2">Hey Ali! Yes, I got tickets. Super excited! 🎶</p>
                </div>
            </div>
        </div>
        <div>
            <img src="../../assets/icons/chatbox/chat3.svg" alt="chat icon">
        </div>
    </div>
</template>

<script>

export default {
    name: 'Chat5',
    components: {
    }
};
</script>
<style scoped>
.chat3Head {
    margin: 24px 24px 32px auto;

    display: flex;
    column-gap: 8px;
    justify-content: flex-end;

    @media (max-width:767px) {
        margin: 24px 24px 32px 24px;

    }
}

.nameBlock {
    display: flex;
    column-gap: 8px;
    justify-content: flex-end;
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

    width: 339px;
    min-height: 32px;

    background: #F36531;
    border-radius: 8px 2px 8px 8px;

    @media (max-width:767px) {
        width: auto;
    }

}

.text2 {
    margin-bottom: 0px;
    font-family: 'Avenir';
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #FFFFFF;
}

.bottomChat {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
}

.IconBlock {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
}

.mainImg {
    max-width: 264px;
    margin-left: auto;
}
</style>
