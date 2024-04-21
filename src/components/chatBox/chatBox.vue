<template>
    <chatBoxHeader />
    <Chat1 />
    <Chat2 />
    <Chat3 />
    <Chat4 />
    <Chat5 />
    <Chat6 />
    <chatBoxBottom />
</template>

<script>
import chatBoxHeader from './chatBoxHeader.vue';
import Chat1 from "./chat1.vue"
import Chat2 from "./chat2.vue"
import Chat3 from "./chat3.vue"
import Chat4 from "./chat4.vue"
import Chat5 from "./chat5.vue"
import Chat6 from "./chat6.vue"
import chatBoxBottom from './chatBoxBottom.vue';

export default {
    name: 'ChatBox',
    components: {
        chatBoxHeader, Chat1, Chat2, Chat3, Chat4, Chat5, Chat6, chatBoxBottom
    }
};
</script>
<style></style>
