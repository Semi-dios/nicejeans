<template>
  <div class="custon-paneldashboard" id="viewStadistic">
      <div class="custon-panelbodydashboard">
           <base-header class="pb-6 pb-8 pt-3 pt-sm-5 bg-transparent ">
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
          <stats-card title="980"
                      type="gradient-red"
                      sub-title="Usuarios Totales"
                      icon="ni ni-active-40"
                      class="mb-4 custom-cardbody">
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="3250"
                      type="gradient-orange"
                      sub-title="Jeans Totales"
                      icon="ni ni-chart-pie-35"
                      class="mb-4 custom-cardbody">


          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="$1000"
                       icon="ni ni-money-coins"
                      type="gradient-green"
                      sub-title="Ventas"

                      class="mb-4 custom-cardbody">


          </stats-card>

        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="$ 1000"
                      type="gradient-info"
                      sub-title="Total Ventas"
                      icon="ni ni-chart-bar-32"
                      class="mb-4 custom-cardbody">
          </stats-card>
        </b-col>
      </b-row>
    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--7">
      <b-row>
        <b-col xl="9" class="mb-5 mb-xl-0">
          <card header-classes="bg-transparent" class="custom-card">
            <b-row align-v="center" slot="header">
              <b-col xl="6">
                <h3 class="h3 font-medium mb-0">Referencias  mas vendidas  </h3>
              </b-col>
              <b-col xl="6">
                    <b-list-group horizontal class="list-group-item list-group-horizontal border-0 list-unstyled custom-listgrouphorizontal">
                        <b-list-group-item class="list-group-item border-0"><p class="p-sm text-black" >Ref # 1</p></b-list-group-item>
                        <b-list-group-item class="list-group-item border-0"><p class="p-sm text-black" >Ref # 2</p></b-list-group-item>
                        <b-list-group-item class="list-group-item border-0"><p class="p-sm text-black" >Ref # 3</p></b-list-group-item>
                    </b-list-group>
              </b-col>
            </b-row>

            <bar-chart
              :height="350"
              ref="barChart"
              :chart-data="redBarChart.chartData"
            >
            </bar-chart>
          </card>
        </b-col>
      </b-row>
      <!-- End charts-->

      <!--Tables-->
      <b-row class="mt-5">
        <b-col xl="8" class="mb-5 mb-xl-0">
          <page-visits-table></page-visits-table>
        </b-col>
        <b-col xl="4" class="mb-5 mb-xl-0">
          <social-traffic-table></social-traffic-table>
        </b-col>
      </b-row>
      <!--End tables-->
    </b-container>
      </div>

  </div>
</template>
<script>
  // Charts

  import * as chartConfigs from '../components/Charts/config';
  import LineChart from '../components/Charts/LineChart';
  import BarChart from '../components/Charts/BarChart';

  // Components
  import BaseProgress from '../components/BaseProgress';
  import StatsCard from '../components/Cards/StatsCard';



  export default {
    components: {
      LineChart,
      BarChart,
      BaseProgress,
      StatsCard,

    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
          chartData: {
            datasets: [
              {
                label: 'Performance',
                data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
              }
            ],
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
