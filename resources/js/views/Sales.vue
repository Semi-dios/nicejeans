<template>
       <div class="custon-paneldashboard" id="viewSales">
        <div class="custon-panelbodydashboard">
            <b-card class="card-profile custom-card">
                <div class="header pb-4 mb-4   pt-3 pt-sm-5 d-flex align-items-center profile-header">
                    <b-container fluid>
                        <!-- Header container -->
                        <b-row >
                            <b-col lg="10" md="11">
                                 <b-form class="customForm mb-5 ">
                                <b-form-group
                                    id="input-group-1"
                                    label-for="input-1"
                                    description=""
                                    class="custom-form-group mb-3"
                                    label="Buscar:"
                                >
                                    <b-form-input
                                    id="input-1"

                                    type="email"
                                    placeholder="Ingrese correo"
                                    class="custom-input "
                                    required
                                    ></b-form-input>
                                </b-form-group>
                                <div class="form-group d-flex justify-content-left ">
                                        <b-button type="submit" class="custom-btn-primary "  variant="primary">Filtrar</b-button>
                                </div>
                                </b-form>
                            </b-col>
                             <b-col lg="2" md="1">
                                  <div class="dropdown open float-right">
                                        <button class="btn  btn-sm dropdown-toggle btn-light" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            <!-- <i class="fas fa-ellipsis-h "></i> -->
                                        </button>
                                    <div class="dropdown-menu" aria-labelledby="triggerId">
                                        <router-link class="dropdown-item" to="#"><i class="fas fa-cloud-download-alt text-primary"></i>Descargar reporte excel</router-link>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>

                    </b-container>
                </div>
                <b-card-body>
                    <b-container fluid class="mt--7">
                        <b-row>
                            <b-col>
                            <light-table/>
                            </b-col>
                        </b-row>
                    </b-container>
                </b-card-body>
            </b-card>
        </div>
    </div>


</template>
<script>
  import Vue from 'vue'
  import VueClipboard from 'vue-clipboard2'
  import BaseHeader from '../components/BaseHeader';
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  import projects from './Tables/projects'
  import users from './Tables/users'
  import LightTable from "./Tables/RegularTables/LightTable";
  import DarkTable from "./Tables/RegularTables/DarkTable";

  Vue.use(VueClipboard)
  export default {
    name: 'icons',
    components: {
      BaseHeader,
      LightTable,
      DarkTable,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
     data() {
      return {
        projects,
        users
      };
    },
    methods: {
      onCopy() {
        this.$notify({
          type: 'info',
          message: 'Copied to clipboard'
        })
      }
    }
  };
</script>
<style></style>
