<template>
    <div>
        <button class="open-button" @click="BackToTop">
            <i class="fa fa-long-arrow-up"></i>
            <!-- <font-awesome-icon :icon="['fa', 'fa-long-arrow-up']" /> -->
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        BackToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
            // this.$router.push("/");
        },
    },
};
</script>

<style scoped>
.open-button {
    /* padding: 16px 20px; */
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.8;
    position: fixed;
    bottom: 300px;
    right: 28px;
    padding: 1rem;
    background-color: #ffbe3c;
    width: 80px;
    height: 80px;
    text-align: center;
    border-radius: 50%;
    color: #ffffff;
    font-size: 1.5rem;
    line-height: 1rem;
    outline: none;
    box-shadow: -1px 6px 13px 0px rgba(0, 0, 0, 0.44);
}
</style>