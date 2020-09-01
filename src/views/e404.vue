 <template>
    <div>
        <h1 class="mb-5">Page not found !</h1>
        <h5 class="text-dark">We're sorry, we couldn't find the page you requested.</h5>
        <h5 class="text-dark">try <router-link class="text-info" to="/">Home</router-link> to teleport to Home page</h5>
        <h5 class="text-dark mt-5">If you feel something is missing that should be here,<router-link class="text-info" to="/ContactUs">contact us</router-link>.</h5>
    </div>
</template>

<script>
    export default {
        name: "e404"
    }
</script>

<style scoped lang="scss">
    html{
        div
        {
            h1
            {
                color: red;
                margin-top: 10rem;
            }
        }
    }
</style>