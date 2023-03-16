<script>
export default {
    props: {project: Object},
}

</script>


<template>
    <div class="container">

        <h1 class="text-center text-primary my-5">{{ project.title }}</h1>

        <div class="card h-100 mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="project.image" class="img-fluid rounded-start h-100" alt="...">
                </div>
                <div class="col-md-8 text-center">
                    <div class="card-body h-100 d-flex flex-column justify-content-between">
                        <h2 class="card-title mb-4">{{project.title}}</h2>

                        <div>
                            <h4 class="mb-3">Project Description:</h4>
                            <p class="card-text">{{project.description}}</p>
                        </div>
                        <div>
                            <h2>Technologies</h2>
                            <span v-if="project.technologies.length" v-for="technology in project.technologies">
                                {{ technology.name }}, 
                            </span>
                            <span v-else> - </span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.card, img {
    height: 300px !important;
}

</style>