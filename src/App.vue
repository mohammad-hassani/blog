<template>

  <div id="app">
    <div id="nav" class="p-0 bg-dark m-0 p-0 header">
        <div class="d-flex justify-content-between">
            <div class="home d-flex">
                <img title="blog" class="d-flex m-2 imagezation" src="./assets/img/blog-text.png" height="60" width="120"/>
                <h6 class="option ml-5"><router-link class="text-decoration-none text-light" to="/">Home</router-link></h6>
                <h6 class="option ml-5"><router-link class="text-decoration-none text-light" to="/about">About</router-link></h6>
                <h6 class="option ml-5"><router-link class="text-decoration-none text-light" to="/TermsOfUse">Terms of use</router-link></h6>
                <h6 class="option ml-5"><router-link class="text-decoration-none text-light" to="/ContactUs">Contact us</router-link></h6>
                <h6 class="optionn ml-5"><router-link class="text-decoration-none text-white-50" to="/login">Sign in</router-link></h6>
            </div>
            <div class="d-flex">
                <input type="search" class=" ml-1 mr-5 mt-3 search-input" placeholder="Search here">
            </div>
        </div>
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
    .header
    {
        height: 4.5rem;
        border-bottom: 2px solid #ffff00;
    }
.search-input:hover
{
    transition: all ease-in-out .2s;
}
.search-input
{
    height:2rem;
    border-radius: 0.5rem;
    outline:none;
}
.option:hover
{
    margin-top: 2.8rem;
    transition: margin-top 0.3s;

    border-right:1px solid #ff0000;
    border-left:1px solid #ff0000;
}
.option
{
    border-right:1px solid #00ff;
    padding-right: 1rem;
    border-left:1px solid #00ff;
    padding-left: 1rem;
    margin-top: 2rem;

}
.optionn:hover
{
    margin-top: 2.8rem;
    transition: margin-top 0.3s;

    border-right:1px solid #00ff;
    border-left:1px solid #00ff;
}
.optionn
{
    border-right:1px solid #ff0000;
    padding-right: 1rem;
    border-left:1px solid #ff0000;
    padding-left: 1rem;
    margin-top: 2rem;

}
.enter
{
    padding-top:20rem;
}
.imagezation
{
}
.imagezation:hover
{
    content: url('./assets/img/blog-text-hover.png');
}

</style>
