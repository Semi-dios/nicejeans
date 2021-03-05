<template>
  <div class="custon-paneldashboard" id="viewUserProfile">
    <div class="custon-panelbodydashboard">
        <b-card class="card-profile custom-card">
            <div class="header pb-4   pt-3 pt-sm-5 d-flex align-items-center profile-header">
                <b-container fluid>
                    <!-- Header container -->

                    <b-row >
                            <b-col lg="3" md="2">
                            <picture class="avatarInfoUser">
                                <img src="images/Avatar5.png" alt="FotoAvatar" srcset="">
                            </picture>
                            </b-col>
                            <b-col lg="7" md="9">
                            <h2 class="display-3 text-dark font-weight-bold">SERGIO PENAGOS</h2>
                            <p class="text-dark p-md mt-0 mb-5">Vendedor</p>
                            </b-col>
                            <b-col lg="2" md="1">
                                <div class="dropdown open float-right">
                                        <button class="btn  btn-sm dropdown-toggle btn-light" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            <!-- <i class="fas fa-ellipsis-h "></i> -->
                                        </button>
                                    <div class="dropdown-menu" aria-labelledby="triggerId">
                                        <router-link class="dropdown-item" :to="{name:'editprofile'}"><i class="fas fa-pencil-alt text-primary"></i>Editar Información</router-link>
                                    </div>
                                </div>
                            </b-col>

                    </b-row>

                </b-container>
            </div>
            <b-card-body>
                    <b-row>
                        <b-col class="col-sm-12 col-md-6 mb-3 col-xl-4">
                            <p class="p-lg font-weitgh-medium text-black">Nombre:</p>
                            <span class="span-md text-secondary">Sergio Andres Penagos </span>
                        </b-col>
                        <b-col class="col-sm-12 col-md-6 mb-3 col-xl-4">
                               <p class="p-lg font-weitgh-medium text-black">Tipo de documento: </p>
                            <span class="span-md text-secondary">Cedula </span>
                        </b-col>
                        <b-col class="col-sm-12 col-md-6 mb-3 col-xl-4">
                               <p class="p-lg font-weitgh-medium text-black">Documento:</p>
                            <span class="span-md text-secondary">1120381370 </span>
                        </b-col>
                        <b-col class="col-sm-12 col-md-6 mb-3 col-xl-4">
                               <p class="p-lg font-weitgh-medium text-black">Nro. Celular</p>
                            <span class="span-md text-secondary">321 069 9966</span>
                        </b-col>
                        <b-col class="col-sm-12 col-md-6 mb-3 col-xl-4">
                               <p class="p-lg font-weitgh-medium text-black">Correo Electronico: </p>
                            <span class="span-md text-secondary">marina@gmail.com </span>
                        </b-col>
                        <b-col class="col-sm-12 col-md-6 mb-3 col-xl-4">
                               <p class="p-lg font-weitgh-medium text-black">Correo empresarial:</p>
                            <span class="span-md text-secondary">Sergio Andres Penagos </span>
                        </b-col>
                        <b-col class="col-sm-12 col-md-6 col-xl-4">
                               <p class="p-lg font-weitgh-medium text-black">Estado: </p>
                            <span class="span-md text-primary">Activo </span>
                        </b-col>
                        <b-col class="col-sm-12 col-md-6 col-xl-4">
                               <p class="p-lg font-weitgh-medium text-black">Rol:</p>
                            <span class="span-md text-secondary">Vendedor </span>
                        </b-col>
                    </b-row>
            </b-card-body>
        </b-card>
    </div>
  </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue';


  export default {
    components: {
      EditProfileForm,

    }
  };
</script>
<style>
</style>
