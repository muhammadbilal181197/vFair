<template>
    <div class="emilyHeader">
        <div class="iconBlock">
            <img src="../../../assets/icons/queued/robert.svg" alt="character Icon">
        </div>
        <div class="rightBlock">
            <div class="textBlock">
                <div class="nameBlock">
                    <h3 class="name">Robert Anderson</h3>
                    <div class="speaker">Speaker</div>
                </div>
                <h4 class="designationM">Accounts Manager | Elite Financial Advisors</h4>
                <p class="tagline">Draft: <Span class="spanText">Hello Robert send me your resume</Span></p>
            </div>
            <h3 class="timetext">1h</h3>
        </div>
    </div>
</template>

<script>

export default {
    name: 'robertChat',
    components: {

    }
};
</script>
<style scoped>
.emilyHeader {
    display: flex;
    padding: 16px;
    column-gap: 8px;

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
    max-width: 289px;
    width: 100%;
    justify-content: space-between;
    row-gap: 4px;
    @media (max-width:1439px) {
        max-width: 100%;
    }
}

.designationM {

    font-family: 'Avenir';
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
    color: #5F6269;
    margin-bottom: 0px;
}

.spanText {
   font-weight: 400;
}

.speaker {

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 8px;
    max-width: 55px;
    width: 100%;
    min-height: 17px;
    background: #58B859;
    border-radius: 10px;
    font-family: 'Avenir';
    font-weight: 800;
    font-size: 10px;
    line-height: 17px;
    margin-bottom: 0px;
    color: #FFFFFF;
}

.nameBlock {
    display: flex;
    align-items: center;
    column-gap: 8px;
}
</style>
