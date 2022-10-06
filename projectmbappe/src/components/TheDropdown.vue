<template>
  <div>
    <li>
      <button ref="showInputButton" class="btn-primary" @click="showInput=!showInput;">Dropdown</button>
      <div ref="dropdown" v-if="showInput" class="popover-custom">
       <ul>
        <li @mousedown.prevent="" @mouseup.prevent="afterClick(item)" v-for="item in items" :key="item.id">{{item}}</li>
       </ul>
      </div>
    </li>
  </div >

</template>

<script>
import Popper from 'popper.js'
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

export default {
  name: 'Dropdown',
  data() {
    return {
      option: 'Option 1',
      showInput: true,
      items: ['Option 1', 'Option 2', 'Option 3']
    }
  },
  mounted() {
    this.$nextTick(function() {
      var Popper = new Popper(this.$refs["showInputButton"], this.$refs["dropdown"], {
          placement: 'bottom-start'
      });
      this.showInput=false;
    });
  },
  methods: {
    afterClick: function(item) {
      this.option = item;
      this.showInput = false;
    }
  }
}
</script>
<style lang="scss" scoped>

    .popover-custom {
      position: absolute;
      z-index: 999;
      background-color: white;
      width: 200px;
      border: 1px solid #c7c7c7;
      box-shadow: 0 5px 20px 0 rgba(21,27,38,.08);
    }
    
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
      outline: none;
    }
    
    input[type=text], textarea {
      outline: none;
      padding: 0px;
      border: none;
      font-size: 1rem !important;
    }
    
    input, select, textarea, button{font-family:inherit;}
    
    input[type=text]:focus, textarea:focus {
      box-shadow: none;
      border: none;
    }
    
    button {
      border: none;
      margin: 1rem;
      font-size: 1rem;
    }
    
    .noborder {
      border: none !important;
    }
    
    .showInputButton {
      cursor: pointer;
      display: inline-block;
      border: 1px solid transparent;
      color: #999;
      font-weight: 500;
      font-size: 1rem;
      padding: 10px;
    }
    
    .inputWrapper {
      padding: 10px;
      display: inline-block;
      border: 1px solid gray;
      border-radius: 3px;
    }
    
    .inputField {
      display: inline-block;
      font-weight: 500;
      font-size: 1rem;
    }
    
    ul {
      cursor: pointer;
      list-style-type: none;
      margin-block-start: 0em;
      margin-block-end: 0em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 0px;
    }
    
    li {
      padding: 10px;
    }
    
    li:hover {
      color: white;
      background-color: #4582EC;
    }
    </style>