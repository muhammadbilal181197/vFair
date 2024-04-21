<template>
    <div class="pageComponent_Parent">
        <div class="d-flex innerComponentParent">
            <div class="chatComponentW">
                <chatComponents />
            </div>
            <div class="chatBoxComponentW">
                <ChatBox />
            </div>
            <div class="userDetailsComponentW d-flex">
                <userDetailsComponent />
            </div>
        </div>
    </div>
</template>

<script>
import chatComponents from '../chatComponents/chatComponents.vue';
import ChatBox from "../chatBox/chatBox.vue"
import userDetailsComponent from "../userDetails/userDetailsComponent.vue"
export default {
    name: 'pageComponent',
    components: {
        chatComponents, ChatBox, userDetailsComponent
    }
};
</script>
<style scoped>
.chatComponentW {
    min-width: 360px;

    @media (max-width:1439px) {
        width: 100%;
    }
}

.pageComponent_Parent,
.chatBoxComponentW {
    width: 100%;
}

.chatBoxComponentW {
    border-left: 1px solid #DFE2E8;
    border-right: 1px solid #DFE2E8;
}

.innerComponentParent {
    @media (max-width:1439px) {
        flex-wrap: wrap;
    }
}

.userDetailsComponentW {
    @media (max-width:1439px) {
        width: 100%;
    }
}
</style>