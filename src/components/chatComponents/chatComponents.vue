<template>
    <topChat />
    <QueuedComponent />
    <InnerChat />
</template>

<script>
import topChat from './topChat.vue';
import QueuedComponent from "../chatComponents/queued/queuedComponent.vue"
import InnerChat from "../chatComponents/chats/innerComponent.vue"
export default {
    name: 'ChatComponents',
    components: {
        topChat, QueuedComponent, InnerChat
    }
};
</script>
<style></style>
