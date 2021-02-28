<template>
    <b-container fluid id="viewContact">
    <b-row>
            <b-col sm="12" lg="5" class="pr-lg-2">
            <picture class="imgContact">
                <img src="/images/contact.svg" alt="">
            </picture>
        </b-col>
        <b-col sm="12" lg="7" class="pl-lg-2">
            <h4 class="title-lg text-secondary">
                Envianos un mensaje !
            </h4>
           <b-container fluid>
                <b-row >
                <b-col sm="12"  >
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="">
                               <b-form-group
                                id="input-group-1"
                                label-for="input-1"
                                description=""
                                class="custom-form-group mb-3"
                                label="Nombre:"
                            >
                                <b-form-input
                                id="input-1"
                                v-model="form.name"
                                type="text"
                                placeholder="Emily "
                                class="custom-input "
                                required
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group
                                id="input-group-2"
                                label-for="input-2"
                                description=""
                                class="custom-form-group mb-3"
                                label="Correo:"
                            >
                                <b-form-input
                                id="input-2"
                                v-model="form.email"
                                type="email"
                                placeholder="Correo@gmail.com"
                                class="custom-input "
                                required
                                ></b-form-input>
                            </b-form-group>
                           <b-form-row>
                                 <b-form-group
                                id="input-group-3"
                                label-for="input-3"
                                description=""
                                class="custom-form-group mb-3 col-sm-12 col-lg-6 "
                                label="Telefono:"
                            >
                                <b-form-input
                                id="input-3"
                                v-model="form.phone"
                                type="text"
                                placeholder="311 550 5552"
                                class="custom-input"
                                required
                                ></b-form-input>
                            </b-form-group>

                             <b-form-group id="input-group-4"    class="custom-form-group mb-3 col-sm-12 col-lg-6" label="Preferencia de comunicacion:" v-slot="{ ariaDescribedby }">
                                <b-form-checkbox-group
                                v-model="form.checked"
                                id="checkboxes-4"
                                class="d-flex align-items-center h-100"
                                :aria-describedby="ariaDescribedby"
                                >
                                <b-form-checkbox value="me">Correo</b-form-checkbox>
                                <b-form-checkbox value="that" >Telefono</b-form-checkbox>
                                </b-form-checkbox-group>
                            </b-form-group>
                           </b-form-row>
                              <b-form-group
                                id="input-group-6"
                                label-for="input-6"
                                description=""
                                class="custom-form-group mb-3"
                                label="Mensaje:"
                            >
                            <b-form-textarea
                                id="textarea-small"
                                size="sm"
                                placeholder="Small textarea"
                                class="customtextArea"
                            ></b-form-textarea>
                            </b-form-group>



                            <div class="form-group d-flex justify-content-lg-end justify-content-center">
                                    <b-button type="submit" class="custom-btn-secondary" disabled >Enviar</b-button>
                            </div>
                        </b-form>
                </b-col>
            </b-row>
           </b-container>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
      nme: 'reset',
    data() {
      return {
        form: {
         email: '',
         phone: '',
         name: '',
         description: '',
         checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = '';
        this.form.phone = '';
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>

</style>
