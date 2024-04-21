<template>
    <div class="emilyHeader">
        <div class="iconBlock">
            <img src="../../../assets/icons/queued/sophie2.svg" alt="character Icon">
        </div>
        <div class="rightBlock">
            <div class="textBlock">
                <div class="nameBlock">
                    <h3 class="name">Sophie Okonedo</h3>
                    <div class="exhibitor">Exhibitor</div>
                </div>
                <h4 class="designationS">Product Manager | Microsoft</h4>
                <p class="tagline">Sophie i ma sending you soon</p>
            </div>
            <div class="timeBlock">
                <h3 class="timetext">1h</h3>
                <img src="../../../assets/icons/queued/dots.svg" alt="dots Icon" class="dotsicon">
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
    background: #FEF0EA;

}

.name {
    font-family: 'Avenir';
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    color: #1B1F29;
    margin-bottom: 4px;
    width: 127px;
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

.timeBlock {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
}

.designationS {

    font-family: 'Avenir';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 4px;
    color: #5F6269;


}

.tagline {
    font-family: 'Avenir';
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #000;
    margin-bottom: 0px;
}


.exhibitor {
    font-family: 'Avenir';
    font-weight: 800;
    font-size: 10px;
    line-height: 17px;
    margin-bottom: 0px;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 8px;
    max-width: 59px;
    width: 100%;
    min-height: 17px;
    background: #0061F9;
    border-radius: 10px;
}

.nameBlock {
    display: flex;
    align-items: center;
    column-gap: 8px;
}

.dotsicon {
    position: absolute;
    top: 15px;
    left: 0px;
    @media (max-width:1439px) {
       left: -15px;
    }
}
</style>
