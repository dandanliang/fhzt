<template>
  <div id="app">
    <div class='logo'>
      <div><img src="/static/logo.png" alt=""></div>
    </div>
    <nav>
      <ul class="nav navbar-nav level0">
        <li data-level="1">
          <router-link class="link" to="/about" data-target="#">关于我们 </router-link>

        </li>
        <li itemprop="name" data-id="102" data-level="1">
          <router-link class="link" to="/team" data-target="#">团队 </router-link>

        </li>
        <li itemprop="name" data-id="103" data-level="1">
          <router-link class="link" to="/portfolio" data-target="#">投资公司 </router-link>

        </li>
        <li itemprop="name" data-id="110" data-level="1">
          <router-link class="link" to="/news" data-target="#">新闻 </router-link>

        </li>
        <li itemprop="name" data-id="105" data-level="1">
          <router-link to="/contact" data-target="#">联系我们 </router-link>

        </li>
      </ul>
    </nav>

    <router-view></router-view>
    <fh-footer></fh-footer>
  </div>
</template>

<script>
import fhFooter from "./components/fh-Footer";
export default {
  components: {
    fhFooter,
  }
  // name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 830px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 0;
}

.logo {
  position: relative;
  margin-top: 90px;
}

.logo div {
  margin: 0 auto;
}

.nav {
  margin-top: 20px;
}

ul li {
  list-style: none;
  float: none;
  display: inline-block;
  height: 20px;
}

.nav li a {
  text-decoration: none;
  display: inline;
  font-size: 20px;

  line-height: 20px;
  display: inline-block;
  color: #5d6061;
}

.nav li a.link::after {
  content: "|";
  display: inline-block;
  padding: 10px 15px;
}

.link:hover {
  color: #72c02c;
}















/* footer {}

.copyright {
  position: absolute;
  bottom: 10px;
  margin-left: 28%;
  z-index: 1;
}

footer p {
  margin: 0;

} */
</style>
