<script>
export default {
    props: {projects: Array}, 
    
}
</script>


<template>

<div class="container mt-5">
    <h1 class="text-center text-primary my-5">
        My favourite projects
    </h1>
    <div class="row g-5">
        <div v-for="project in projects" class="col-4">
            <div class="card text-center">
                <img :src="project.image" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ `${project.description.slice(0, 85)}...` }}</p>
                    <a :href="project.full_code" class="btn btn-primary">View full code</a>
                </div>
            </div>
        </div>
    </div>
</div>  

</template>


<style scoped lang="scss">
    .card {
        img {
            height: 300px;
        }
    }
</style>