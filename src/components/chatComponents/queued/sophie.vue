<template>
    <div class="emilyHeader">
        <div class="iconBlock">
            <img src="../../../assets/icons/queued/sophie.svg" alt="character Icon">
        </div>
        <div class="rightBlock">
            <div class="textBlock">
                <h3 class="name">Sophie Okonedo</h3>
                <h4 class="designation">UX Designer | GreenScape Solut...</h4>
            </div>
            <div class="timeBlock">
                <p class="waitText">Wait Time</p>
                <h3 class="timetext">10m : 25s</h3>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SophieChat',
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

.designation {

    font-family: 'Avenir';
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    margin-bottom: 0px;
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

.waitText {
    margin-bottom: 0px;
    font-family: 'Avenir';
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #5F6269;
}

.timeBlock {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    border-left: 1px solid #DFE2E8;
    padding-left: 16px;
}
</style>
