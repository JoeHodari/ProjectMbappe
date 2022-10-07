<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Project Mbappe </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"> Home </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> Login </a>
        </li>
        <li>
          <button ref="showInputButton" class="btn btn-secondary dropdown-toggle" @click="showInput=!showInput;"> More </button>
          <div ref="dropdown" v-if="showInput" class="popover-custom">
            <ul>
              <li @mousedown.prevent="" @mouseup.prevent="afterClick(item)" v-for="item in items" :key="item.id">{{item}}</li>
            </ul>
          </div>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
import Popper from 'popper.js'
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false
export default {
  name: 'TheNavbar',
  data() {
    return {
      option: 'Option 1',
      showInput: false,
      items: ['About Us', 'Services', 'Contact US']
    }
  },
  methods: {
    afterClick: function(item) {
      this.option = item;
      this.showInput = false;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
