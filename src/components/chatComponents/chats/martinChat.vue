<template>
    <div class="emilyHeader">
        <div class="iconBlock">
            <img src="../../../assets/icons/queued/martin.svg" alt="character Icon">
        </div>
        <div class="rightBlock">
            <div class="textBlock">
                <h3 class="name">Martin Randolph</h3>
                <h4 class="designationM">UX Designer | GreenScape Solutions</h4>
                <p class="tagline">Draft: <Span class="spanText">Hello Martin how are you...</Span></p>
            </div>
            <div class="timeBlock">
                <h3 class="timetext">1h</h3>
                <div class="box">5</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'MartinChat',
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

.box {
    width: 16px;
    height: 16px;
    background: #5F6269;
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

.designationM {

    font-family: 'Avenir';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 4px;
}

.tagline {
    font-family: 'Avenir';
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #0061F9;
    margin-bottom: 0px;
}

.spanText {
    color: #5F6269;
}
</style>
