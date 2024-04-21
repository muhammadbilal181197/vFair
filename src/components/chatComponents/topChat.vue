<template>
    <div class="header_Block">
        <h2 class="heading">Chats</h2>
        <img src="../../assets/icons/mainContent/dots.svg" alt="dots Icon">
    </div>
    <div class="bottomBlock">
        <div class="form_InputBlock">
            <img src="../../assets/icons/mainContent/search.svg" alt="search Icon">
            <input type="text" class="form_Input" placeholder="Search messages" aria-describedby="basic-addon1">
        </div>
    </div>
</template>

<script>

export default {
    name: 'TopChat',
    components: {

    }
};
</script>
<style scoped>
.header_Block {
    padding: 16px;
    display: flex;
    justify-content: space-between;
}

.heading {
    font-family: 'Avenir';
    font-weight: 800;
    font-size: 24px;
    line-height: 40px;
    margin-bottom: 0px;
}
.bottomBlock{
    padding: 0px 16px 16px 16px;
}
.form_InputBlock {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 8px;
    gap: 8px;
    width: 100%;
    min-height: 40px;
    background: #F0F2F6;
    border-radius: 8px;

}

.form_Input {
    border: 0px;
    width: 100%;
    background-color: transparent;
}

.form_Input::placeholder {
    font-family: 'Avenir';
    font-weight: 400;
    font-size: 14px;
    color: #B5B8BE;
}

.form_Input:focus {
    border: 0px;
    outline: none;
}
</style>
