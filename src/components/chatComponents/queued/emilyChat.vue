<template>
    <div class="emilyHeader">
        <div class="iconBlock">
            <img src="../../../assets/icons/queued/emily.svg" alt="character Icon">
        </div>
        <div class="rightBlock">
            <div class="textBlock">
                <h3 class="name">Emily Johnson</h3>
                <h4 class="tagline">You: <Span class="spanText">Hello Emily How are you</Span></h4>
            </div>
            <div class="timeBlock">
                <h3 class="timetext">8m: 20s</h3>
                <div class="box">2</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'EmilyChat',
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
    font-weight: 800;
    font-size: 12px;
    line-height: 17px;
    margin-bottom: 0px;
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

.box {
    width: 16px;
    height: 16px;
    background: #F36531;
    border-radius: 100px;
    font-family: 'Avenir';
    font-weight: 800;
    font-size: 8px;
    line-height: 8px;
    margin-bottom: 0px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
}

.timeBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}

</style>
