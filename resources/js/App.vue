<template>
   <b-container fluid class="custom-bg" :style="{ 'background-image': 'url(/images/bg.jpg)' }" >
           <b-row class="justify-content-center d-flex align-items-center h-100">
                <b-col sm="11" lg="10"  >
                    <div class="custom-panel">
                            <div class="custom-panel-heading">
                                    <Header v-if="$route.meta.header === 1"/>
                            </div>
                            <div class="custom-panel-body">
                                    <router-view></router-view>
                            </div>
                    </div>
                </b-col>
            </b-row>
   </b-container>
</template>

<script>
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import Sidebar from './components/partials/Sidebar'


export default {
    components: {
        Header,
        Footer,
        Sidebar,

    }
}
</script>

<style>

</style>
