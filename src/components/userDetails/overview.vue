<template>
    <div class="overviewhead">
        <div class="box1">Overview</div>
        <div class="box2">Contact History</div>
    </div>
    <div>
        <div class="userDetail">
            <h2 class="heading">User Detail</h2>
            <img src="../../assets/icons/userdetails/arrow.svg" alt="User Details">
        </div>
        <div class="textBlock">
            <div>
                <p class="title">Email Address:</p>
                <p class="subTitle">sophie.okonedo@company.com</p>
            </div>
            <div>
                <p class="title">Alternative Email:</p>
                <p class="subTitle">sophie887@gmail.com</p>
            </div>
            <div>
                <p class="title">Date of Birth:</p>
                <p class="subTitle">29 Jul, 1990</p>
            </div>
            <div>
                <p class="title">Country:</p>
                <p class="subTitle">Canada</p>
            </div>
            <div>
                <p class="title">State:</p>
                <p class="subTitle">Alberta</p>
            </div>
            <div>
                <p class="title">City:</p>
                <p class="subTitle">Edmonton</p>
            </div>
            <div>
                <p class="title">Postal Code:</p>
                <p class="subTitle">987909</p>
            </div>
        </div>
        <div class="userDetail tags">
            <h2 class="heading2">Tags (5)</h2>
            <img src="../../assets/icons/userdetails/arrow2.svg" alt="User Details">
        </div>

    </div>
</template>

<script>
export default {
    name: 'overview',
    components: {
    }
};
</script>
<style scoped>
.overviewhead {
    padding: 1px 16px 0px;
    background: #FFFFFF;
    border-bottom: 1px solid #DFE2E8;
    display: flex;
    justify-content: space-between;
}

.box1 {
    padding: 8px 16px;
    width: 164px;
    min-height: 40px;
    background: #FFFFFF;
    border-bottom: 2px solid #F36531;
    text-align: center;
    font-family: 'Avenir';
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #F36531;

}

.box2 {
    padding: 8px 16px;
    width: 164px;
    min-height: 40px;
    text-align: center;
    background: #FFFFFF;
    font-family: 'Avenir';
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #5F6269;
}

.userDetail {
    display: flex;
    justify-content: space-between;
    padding: 14px 16px
}

.heading {
    font-family: 'Avenir';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #F36531;
    margin-bottom: 0px;
}

.textBlock {
    padding: 10px 0px 30px 20px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    border-bottom: 1px solid #D9D9D9;

}

.title {

    font-family: 'Avenir';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0px;
    color: #5F6269;
}

.subTitle {
    font-family: 'Avenir';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #1B1F29;
    margin-bottom: 0px;
}

.heading2 {

    font-family: 'Avenir';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 0px;
    color: #202223;

}

.tags {
    border-bottom: 1px solid #D9D9D9;
}
</style>
