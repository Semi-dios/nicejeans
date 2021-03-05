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
                                <b-button class="btn-border ">Cambiar avatar</b-button>
                            </b-col>


                    </b-row>

                </b-container>
            </div>
            <b-card-body>
                     <card class="border-0">
                    <b-row align-v="center" slot="header" >
                    <b-col cols="8">
                        <h3 class="mb-0">Editar Perfil </h3>
                    </b-col>
                    </b-row>

                    <b-form @submit.prevent="updateProfile">
                    <h6 class="heading-small text-muted mb-4">Informacion General</h6>

                    <div class="pl-lg-4">
                        <b-row>
                            <b-col lg="6" xl="4">
                                <base-input
                                type="text"
                                label="Nombre:"
                                placeholder="Username"
                                v-model="user.username"
                                class="custom-input"
                                >
                                </base-input>
                            </b-col>
                            <b-col lg="6" xl="4">
                                <base-input
                                type="text"
                                label="Tipo de documento:"
                                placeholder="Cedula"
                                v-model="user.username"
                                class="custom-input"
                                >
                                </base-input>
                            </b-col>
                            <b-col lg="6" xl="4">
                                <base-input
                                type="text"
                                label="Nro de documento:"
                                placeholder="11111111"
                                v-model="user.username"
                                class="custom-input"
                                >
                                </base-input>
                            </b-col>
                        </b-row>
                    </div>
                    <hr class="my-4">

                    <!-- Address -->
                    <h6 class="heading-small text-muted mb-4">Información de contacto</h6>

                    <div class="pl-lg-4">
                        <b-row>
                        <b-col md="6" xl="4">
                            <base-input
                            type="text"
                            label="Direccion:"
                            placeholder="Cra 1#43b-23"
                            v-model="user.address"
                             class="custom-input"
                            >
                            </base-input>
                        </b-col>

                        <b-col lg="4">
                            <base-input
                            type="text"
                            label="Ciudad:"
                            placeholder="Bogota"
                            v-model="user.city"
                             class="custom-input"
                            >
                            </base-input>
                        </b-col>
                        <b-col lg="4">
                            <base-input
                            type="text"
                            label="Pais"
                            placeholder="Colombia"
                            v-model="user.country"
                             class="custom-input"
                            >
                            </base-input>
                        </b-col>
                        <b-col lg="4">
                            <base-input
                            label="Correo"
                            placeholder="correo"
                            v-model="user.email"
                             class="custom-input"
                            >
                            </base-input>
                        </b-col>
                        </b-row>
                        <b-row class="d-flex justify-content-lg-end justify-content-center">
                            <b-col class="col-sm-12 col-md-6 col-xl-3 ">
                                <b-button class="custom-btn-secondary" :to="{name:'profile'}">Cancelar</b-button>
                            </b-col>
                            <b-col class="col-sm-12 col-md-6 col-xl-3">
                                <b-button type="submit" class="custom-btn-primary" variant="primary" >Guardar</b-button></b-col>
                        </b-row>
                    </div>
                    </b-form>
                </card>
            </b-card-body>
        </b-card>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      user: {
        company: 'Creative Code Inc.',
        username: 'michael23',
        email: '',
        firstName: 'Mike',
        lastName: 'Andrew',
        address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        city: 'New York',
        country: 'USA',
        postalCode: '',
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
      }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style></style>
