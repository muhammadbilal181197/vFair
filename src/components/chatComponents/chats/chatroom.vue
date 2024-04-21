<template>
    <div class="emilyHeader">
        <div class="iconBlock">
            <img src="../../../assets/icons/queued/public.svg" alt="character Icon">
        </div>
        <div class="rightBlock">
            <div class="textBlock">
                <h3 class="name">Public Chatroom</h3>
                <h4 class="tagline">Clark: <Span class="spanText"> Hello Martin how are you...</Span></h4>
            </div>
            <h3 class="timetext">1h</h3>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ChatRoom',
    components: {

    }
};
</script>
<style scoped>
.emilyHeader {
    display: flex;
    padding: 16px;
    column-gap: 8px;
    border-bottom: 1px solid #DFE2E8;

}

.name {
    font-family: 'Avenir';
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    color: #1B1F29;
    margin-bottom: 4px;
}

.tagline {
    font-family: 'Avenir';
    font-weight: 800;
    font-size: 12px;
    line-height: 17px;
    margin-bottom: 0px;
    color: #5F6269;
}

.spanText {
    font-weight: 400;
}

.timetext {

    font-family: 'Avenir';
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    margin-bottom: 0px;
    color: #B5B8BE;


}

.rightBlock {
    display: flex;
    max-width: 279px;
    width: 100%;
    justify-content: space-between;
    row-gap: 4px;

    @media (max-width:1439px) {
        max-width: 100%;
    }
}
</style>
