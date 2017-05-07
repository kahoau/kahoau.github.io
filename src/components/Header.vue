<template>
  <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">kahoau</a>
        </div>
        <ul class="nav navbar-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/image_gallery">Image Gallery</router-link></li>
          <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
              menu with dropdown
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="/src/resources/html/src_db/aa.html" target="_blank">AA</a></li>
              <li><a href="/src/resources/html/src_db/bb.html" target="_blank">BB</a></li>
              <li><a href="/src/resources/html/src_db/cc.html" target="_blank">CC</a></li>
            </ul>
          </li>

          <li><a href="/src/resources/apidoc/doc/index.html" target="_blank">Doc</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>




