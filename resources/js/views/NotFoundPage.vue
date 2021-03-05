
      <template>
   <b-container fluid id="viewNotFound" class="py-4">
        <b-row class="mb-4 d-flex text-center justify-content-center">
            <b-col sm="12" class="">
                <picture  class="contentLogo">
                    <img src="/images/logo.svg" alt="">
                </picture>
                <h4 class="title-lg text-secondary">
                    SOD
                </h4>
            </b-col>
        </b-row>

       <b-row>
               <b-col>
                <div class="separator separator-bottom separator-skew zindex-100">
                    <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </b-col>
           <b-col sm="12">
                 <div class="contentviewBody">
                   <div class="contentHeader text-center">
                       <h1 class="text-secondary title-xl text-center font-weight-bold mb-4"> 404 Ooops!</h1>
                       <p class="p-md text-black text-center ">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis asperiores modi nam, veritatis accusamus quam eos odio debitis veniam dolore voluptas quia magni rerum! Saepe iure nisi placeat quia tempore?
                       </p>
                   </div>

                   <div class="contentBody text-center">
                       <b-row class="d-flex justify-content-center">
                           <b-col sm="12" lg="3">
                                <router-link class="custom-btn-primary mb-3" :to="{name:'welcome'}">Inicio</router-link>
                           </b-col>
                           <b-col sm="12" lg="3">
                                <router-link class="custom-btn-secondary mb-3" to="#">Volver</router-link>
                           </b-col>
                       </b-row>

                   </div>
               </div>
           </b-col>
       </b-row>
   </b-container>

</template>


<script>

export default {
  name: 'not-found'
};
</script>
