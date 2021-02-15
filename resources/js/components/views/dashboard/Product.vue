<template>
   <div class="container-fluid">
        <div>
    <b-table striped hover :items="items"></b-table>
  </div>

   <b-modal ref="my-modal" hide-footer title="Using Component Methods">

    <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Name"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
        </div>
    </b-modal>
   </div>
</template>

<script>
export default {
    name: 'product',
    data() {
        return {
            productData: {
                name:'',
                image: ''
            },
            items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' }
            ]
        }
    }

}
</script>

<style>

</style>
