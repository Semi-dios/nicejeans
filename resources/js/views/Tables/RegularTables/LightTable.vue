<template>
    <b-card no-body>
        <el-table class="table-responsive table custom-table"
                  header-row-class-name="thead-light"
                  :data="projects">
            <el-table-column label="Id"
                             min-width="310px"
                             prop="name">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.title}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>
            <el-table-column label="Valor"
                             prop="budget"
                             min-width="140px">
            </el-table-column>

            <el-table-column label="Estatus"
                             min-width="170px"
                             prop="status">
                <template v-slot="{row}">
                    <badge class="badge-dot mr-4" type="">
                        <i :class="`bg-${row.statusType}`"></i>
                        <span class="status" :class="`text-${row.statusType}`">{{row.status}}</span>
                    </badge>
                </template>
            </el-table-column>

            <el-table-column label="Descirpcion" min-width="190px">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.title}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>

            <el-table-column label="Opciones"
                             prop="completion"
                             min-width="240px">
                <template v-slot>
                    <div class="d-flex align-items-center">
                        <b-button size="sm"><i class="far fa-eye"></i></b-button>
                        <b-button size="sm"><i class="fas fa-pencil-alt"></i></b-button>
                        <b-button size="sm"><i class="fas fa-trash-alt"></i></b-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>

        <b-card-footer class="py-4 d-flex justify-content-end">
            <base-pagination v-model="currentPage" :per-page="5" :total="50"></base-pagination>
        </b-card-footer>
    </b-card>
</template>
<script>
  import projects from './../projects'
  import { Table, TableColumn} from 'element-ui'
  export default {
    name: 'light-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        projects,
        currentPage: 1
      };
    }
  }
</script>
