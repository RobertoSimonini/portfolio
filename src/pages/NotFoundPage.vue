<script>
export default {
    name: 'NotFound'
}

</script>

<template>
    <div class="not-found-container d-flex justify-content-center align-items-center text-danger flex-column">
        <h1>
            404 - Page not Found
        </h1>
        <p>
            We couldn't find that page, try going to:
            <router-link to="/" class="ms-2 btn btn-warning">Home</router-link>
        </p>
    </div>
</template>

<style scoped>

.not-found-container {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
}   

</style>