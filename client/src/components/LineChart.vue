<template>
  <svg ref="svg"></svg>
</template>
<script>
  import * as d3 from 'd3'
  import * as topojson from 'topojson-client'
  export default {
    name: 'LineChart',
    mounted() {
      this.plot()
    },
    methods: {
      plot() {
        const svg = d3.select(this.$refs.svg)

        d3.json('https://unpkg.com/world-atlas@1/world/50m.json').then(
          function (world) {
            const scale = 600
            const width = window.innerWidth
            const height = window.innerHeight

            const projection = d3
              .geoMercator()
              .scale(scale)
              .translate([width / 2, height / 2])

            const pathGen = d3.geoPath().projection(projection)

            svg.attr('width', width)
            svg.attr('height', height)

            svg
              .selectAll('path')
              .data(
                /**
                 * Turkey: id = 792
                 */
                topojson.feature(world, world.objects.countries).features //.filter((country) => country.id == 792)
              )
              .enter()
              .append('path')
              .attr('d', pathGen)
              .on('click', (e, d) => console.log(d.id))
          }
        )
      }
    }
  }
</script>

<style lang="scss" scoped>
  svg {
    &::v-deep(path) {
      fill: lightgreen;
      stroke: black;
      stroke-width: 0.01;
    }
  }
</style>
