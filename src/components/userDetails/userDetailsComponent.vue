<template>
    <div class="d-flex flex-column justify-content-between userDetail">
        <div>
            <userProfile />
            <overview />
        </div>
        <Notes />
    </div>
</template>

<script>
import userProfile from "./userProfile.vue"
import overview from "./overview.vue"
import Notes from "./notes.vue"
export default {
    name: 'userDetailsComponent',
    components: {
        userProfile, overview, Notes
    }
};
</script>
<style scoped>
.userDetail {
    @media (max-width:1439px) {
        width: 100%;
    }
}
</style>
