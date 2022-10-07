<template>
    <div class="image-fit">
      <img :src="image" />
    </div>
</template>
  
<script>
  
  import image from "../assets/alphard2.jpg"
  
  export default {
    data: function () {
      return {
        image: image
      }
    }
  }
  
</script>
<style>
    .image-fit{  
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
</style>