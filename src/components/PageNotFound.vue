<template>
    <div class="container">
        <div class="card alert-danger">
            <div class="card-body">
                <h1 class="card-text">{{errorMessage}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            errorMessage: "Page Not Found"
        }
    }
}
</script>

<style scoped>
.print{
    text-align: center;
    color: white;
    padding-top: 100px;
}
</style>