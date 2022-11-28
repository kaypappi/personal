<template>
    <div>
    <div class="slider">
      <div class="slide-track">
        <div class="slide ">Lorem ipsum dolor sit amet consectetur. Sed consectetur malesuada lectus eu tristique dolor metus. Quisque sed ultrices quam nullam id. </div>
        <div class="slide ">Lorem ipsum dolor sit amet consectetur. Sed consectetur malesuada lectus eu tristique dolor metus. Quisque sed ultrices quam nullam id. </div>
        <div class="slide ">Lorem ipsum dolor sit amet consectetur. Sed consectetur malesuada lectus eu tristique dolor metus. Quisque sed ultrices quam nullam id. </div>
        <div class="slide ">Lorem ipsum dolor sit amet consectetur. Sed consectetur malesuada lectus eu tristique dolor metus. Quisque sed ultrices quam nullam id. </div>
        <div class="slide ">Lorem ipsum dolor sit amet consectetur. Sed consectetur malesuada lectus eu tristique dolor metus. Quisque sed ultrices quam nullam id. </div>
        <div class="slide ">Lorem ipsum dolor sit amet consectetur. Sed consectetur malesuada lectus eu tristique dolor metus. Quisque sed ultrices quam nullam id. </div>
        <div class="slide ">Lorem ipsum dolor sit amet consectetur. Sed consectetur malesuada lectus eu tristique dolor metus. Quisque sed ultrices quam nullam id. </div>
        <div class="slide ">Lorem ipsum dolor sit amet consectetur. Sed consectetur malesuada lectus eu tristique dolor metus. Quisque sed ultrices quam nullam id. </div>
        <div class="slide ">Lorem ipsum dolor sit amet consectetur. Sed consectetur malesuada lectus eu tristique dolor metus. Quisque sed ultrices quam nullam id. </div>
        
      </div>
    </div>
    </div>
</template>
<style scoped>
.slider {
    height: 60px;
    position: relative;
    width: 100%;
  
    display: grid;
    place-items: center;
    overflow: hidden;
  }
  
 
  
  /*  IMPORTANT CODE BELOW */
  
  .slide-track {
    width: 100%;
    display: flex;
    animation: scroll 20s linear infinite;
    justify-content: space-between;
  }
  
  .slide {
    width: max-content;
    height: 60px;
  
    display: grid;
    place-items: center;
    transition:0.5s;
    cursor:pointer;
  }

  
  @keyframes scroll {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(calc(-150px * 10));
    }
  }
  
  @keyframes scroll2 {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(calc(-150px * 5));
    }
  }
  
 
  
</style>