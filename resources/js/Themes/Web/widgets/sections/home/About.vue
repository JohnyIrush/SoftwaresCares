<template>
    <div class="col-12 mt-1 home-about-height bg-color-darkblue card" >
        <div class="row mt-4 m-2 about-min-sections card mini-section-height pt-2 pb-2">
          <div class="col-12">
            <div class="row">
             <div class="col-12 rec-frame-height bg-color-red">
              <h1 class="text-primary">  Operating Systems</h1>               
             </div>
            </div>
            <div class="row justify-content-center align-items-center">
              <div class="col-5 card zoomed-col-height bg-color-dark">
                  <img src="/Developement/Images/keyboard.jpg" class="img-fluid image-height" alt="" srcset="">
              </div>
              <div class="col-5 card minimized-col-height bg-color-darkblue">
                  <p class="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos laudantium ducimus sit, quisquam unde natus? Dolor quos ullam nostrum quae, aspernatur ex optio, dolore cumque architecto, eius odit inventore! Obcaecati, amet magni possimus est ipsum similique velit id dolor asperiores nemo laborum corrupti quo at eaque? Ipsam, cumque. Recusandae fugit,  </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4 m-2 about-min-sections card mini-section-height pt-2 pb-2">
          <div class="col-12">
            <div class="row">
              <div class="col-12 rec-frame-height bg-color-red">
              <h1 class="text-primary"> Desktop and Mobile Applications</h1>
              </div>
            </div>
            <div class="row justify-content-center align-items-center">
              <div class="col-5 card  minimized-col-height bg-color-darkblue">
                  <p class="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos laudantium ducimus sit, quisquam unde natus? Dolor quos ullam nostrum quae, aspernatur ex optio, dolore cumque architecto, eius odit inventore! Obcaecati, amet magni possimus est ipsum similique velit id dolor asperiores nemo laborum corrupti quo at eaque? Ipsam, cumque. Recusandae fugit,  </p>
              </div>
              <div class="col-5 card zoomed-col-height bg-color-dark">
                  <img src="/Developement/Images/guidesolutions.jpg" class="img-fluid image-height" alt="" srcset="">
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4 m-2 about-min-sections card mini-section-height pt-2 pb-2">
          <div class="col-12">
            <div class="row">
              <div class="col-12 rec-frame-height bg-color-red">
              <h1 class="text-primary"> <i class="fas fa-project-diagram    "></i> Web Development</h1>
              </div>
            </div>
            <div class="row justify-content-center align-items-center">
              <div class="col-5 card zoomed-col-height bg-color-dark">
                  <img src="/Developement/Images/question-mark.jpg" class="img-fluid image-height" alt="" srcset="">
              </div>
              <div class="col-5 card minimized-col-height bg-color-darkblue">
                  <p class="text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos laudantium ducimus sit, quisquam unde natus? Dolor quos ullam nostrum quae, aspernatur ex optio, dolore cumque architecto, eius odit inventore! Obcaecati, amet magni possimus est ipsum similique velit id dolor asperiores nemo laborum corrupti quo at eaque? Ipsam, cumque. Recusandae fugit,  </p>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>



<script>
export default {
  watch: {
  },
    
}
</script>

<style >
 .home-about-height{
     height: 200vh;
 }
 .image-height{
   height: 100%;
   width: 100%;
 }
 /**About sections*/
 .about-min-sections{
   height: 60vh;
 }

 /**About Section stylings*/
 .zoomed-col-height{
   height: 45vh;
 }
 .minimized-col-height{
   height: 35vh;
 }
</style>