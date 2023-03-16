<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';
import ProjectCardDetail from '../components/ProjectCardDetail.vue';
const apiUri = 'http://localhost:8000/api/'
export default {
    name: 'Project-Details',
    components: {ProjectCardDetail, AppLoader},
    data() {
        return {
            project : null,
            isLoading: false
        }
    }, 

    methods: {
        getProject(){
            this.isLoading = true;
            axios.get(`${apiUri}projects/${this.$route.params.id}`).then(res => {
                this.project = res.data;
            }).catch(err => {
                console.log(err);
            }).then (() => {
                this.isLoading = false;
            })
        }
    },
    created() {
        this.getProject();
    }
}

</script>


<template>

<AppLoader v-if="isLoading" />
<ProjectCardDetail :project="project" v-else />


</template>



<style scoped>


</style>