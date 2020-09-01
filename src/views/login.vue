<template>
    <div>
        <div class="login-div d-flex  flex-column ">
            <h4 class="mt-2 ml-2 text-info">user name:</h4>
            <input v-model="username" class="input" placeholder="type your username" type="text" >
            <p v-if="username===''" class="text-warning m-0 p-0">please insert your username</p>
            <router-link :event="username ? 'click' : ''" class="text-decoration-none text-info submit mt-3 p-1" to="/">Sign in</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data ()
            {
                return {
                    username: ''
                }
            }
    }
</script>

<style scoped lang="scss">
    .login-div
    {
        margin-top: 8rem;
        margin-left: auto;
        margin-right: auto;
        width:23rem;
        height:10rem;
        background-color: #6a6969;
        border-radius:1rem;
        box-shadow: 1px 1px #888888;
    }
    .input
    {
        width:18rem;
        height:2rem;
        background-color: #d9d9d9;
        outline:none;
        border:none;
        border-bottom: 3px solid #00ff;
        border-left: 3px double #00ff;
        margin-right: auto;
        margin-left: auto;


    }
    .submit:hover
    {
        transition: 0.5s;
        background-color: #ef8484;
        color: #000000;
    }

    .submit
    {
        height:2rem;
        width:5rem;
        margin-top: 2rem;
        margin-left: auto;
        margin-right: auto;
        outline:none;
        border:none;
        border-radius: 0.4rem;
        background-color:#555555;
        align-items: center;

    }
</style>