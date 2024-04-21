<template>
    <div class="headerBlock">
        <h2 class="heading">Queued</h2>
    </div>
    <emilyChat />
    <sophie />
</template>

<script>
import emilyChat from './emilyChat.vue';
import sophie from './sophie.vue';
export default {
    name: 'QueuedComponent',
    components: {
        emilyChat, sophie
    }
};
</script>
<style scoped>
.headerBlock {
    padding: 8px 16px 0px 16px;
}

.heading {

    font-family: 'Avenir';
    font-weight: 800;
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 0px;
    color: #000000;
}
</style>
