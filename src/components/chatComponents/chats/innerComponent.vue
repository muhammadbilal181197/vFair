<template>
    <div class="headerBlock">
        <h2 class="heading">Chats</h2>
    </div>
    <QuantumChat />
    <MartinChat />
    <SophieChat />
    <MicrosoftChat />
    <Chatroom />
    <robertChat />
</template>

<script>
import QuantumChat from "./quantumChat.vue"
import MartinChat from "./martinChat.vue"
import SophieChat from "./sophieChat.vue"
import MicrosoftChat from "./microsoftChat.vue"
import Chatroom from "./chatroom.vue"
import robertChat from "./robertChat.vue"
export default {
    name: 'InnerChat',
    components: {
        QuantumChat, MartinChat, SophieChat, MicrosoftChat, Chatroom, robertChat
    }
};
</script>
<style scoped>
.headerBlock {
    padding: 24px 16px 0px 16px;
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
