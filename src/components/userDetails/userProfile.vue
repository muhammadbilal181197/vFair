<template>
    <div class="userDetailsHead">
        <div>
            <img src="../../assets/icons/userdetails/icon1.svg" alt="character Icon">
        </div>
        <div class="rightBlockProfile">
            <div>
                <h2 class="name">Sophie Okonedo</h2>
                <p class="title">Senior UX/UI Designer at Nexus Technology Group</p>
                <div class="ratingBlock">
                    <img src="../../assets/icons/userdetails/rating.svg" alt="rating Icon">
                    <h3 class="ratingText">3.0</h3>
                </div>
            </div>
            <div class="iconBlockProfile">
                <img src="../../assets/icons/userdetails/icon2.svg" alt="Icon">
                <img src="../../assets/icons/userdetails/icon3.svg" alt="Icon">

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'userProfile',
    components: {
    }
};
</script>
<style scoped>
.userDetailsHead {
    display: flex;
    padding: 24px;
    column-gap: 10px;
}

.name {

    font-family: 'Avenir';
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0px;
    color: #344054;
}

.title {
    font-family: 'Avenir';
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 0px;
    color: #667085;
    width: 175px;
}

.ratingBlock {
    display: flex;
    column-gap: 8px;
}

.ratingText {

    font-family: 'Avenir';
    font-weight: 800;
    font-size: 13px;
    line-height: 17px;
    margin-bottom: 0px;
    color: #5F6269;
}

.rightBlockProfile {
    display: flex;
    column-gap: 20px;
    align-items: flex-start
}

.iconBlockProfile {
    display: flex;
    column-gap: 8px;
}
</style>
