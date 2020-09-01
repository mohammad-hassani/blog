<template>
<div class="container    home-div">
    <ul class="olist p-0 d-flex flex-wrap">
        <li
                class="list"
                v-for="(blog,index) in blogs"
                v-bind:key="index">
            <div class="dlist">
                <p class=" ml-auto mr-auto"><strong>{{blog.title}}</strong></p>
                <div class="d-flex">
                    <img class=" imgimg" :src="blog.src" width="150rem" height="100rem">
                    <span  class="blog-comments">{{blog.comment}}</span>
                </div>
                <router-link
                        @click="editblog(index)"
                        class="edit-button text-decoration-none p-2" to="/edit">edit</router-link>

            </div>
        </li>
    </ul>
</div>
</template>

<script>
    import { mapState } from 'vuex'
// @ is an alias to /src

export default {
  name: 'Home',
    data ()
    {
        return {
            src:''
        }
    },
    methods:
        {
            editblog: function (index) {
            this.$store.commit(index)
        }
        },
    computed:
        {
            ...mapState(['blogs']),
        },
    mounted() {
        console.log(this.blogs);
    }
}
</script>

<style lang="scss">
    .home-div
    {
    }
    .list
    {
        width:30rem;
        background-color: #e7e4e4;
        height:10rem;
        margin-left:3rem;
        margin-top:3rem;
        display:flex;
        flex-wrap: wrap;
        border-radius:1rem;
    }
    .olist
    {
        width:70rem;
    }
    .dlist
    {
        width:70rem;
    }
    .blog-comments
    {
        width:20rem;
        overflow:hidden;
        height:20rem;
        white-space:unset;
        max-width:53ch;
        max-height: 10ch;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
    .imgimg
    {
        border-radius:1rem;

    }
    .edit-button:focus
    {
        outline:none;
    }
    .edit-button:hover
    {
        background-color: #acc7e5;
    }
    .edit-button
    {
        font-size: 0.8rem;
        background-color: #c2efe5;
        outline:none;
        border-radius: 0.4rem;
        border: 1px solid #7abaff;
    }

</style>