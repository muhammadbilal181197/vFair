<template>
    <div class="notesHead">
        <h2 class="title">Notes</h2>
        <textarea name="textarea" id="textarea" class="textArea"></textarea>
        <img src="../../assets/icons/userdetails/resize.svg" alt="resize Icon" class="resize">
    </div>
</template>

<script>

export default {
    name: 'Notes',
    components: {
    }
};
</script>
<style scoped>
.notesHead {
    background: #F0F2F6;
    padding: 16px;
    margin-top: 60px;
    position: relative;
    min-height: 146px;
}

.title {

    font-family: 'Avenir';
    font-weight: 800;
    font-size: 14px;
    line-height: 20px;
    color: #5F6269;
    margin-bottom: 4px;

}

.textArea {
    resize: none;
    background: #FFFFFF;
    border: 1px solid #B5B8BE;
    border-radius: 8px;
    min-height: 69px;
    width: 100%;

}

.resize {
    position: absolute;
    right: 19px;
    bottom: 20px;
}
</style>
