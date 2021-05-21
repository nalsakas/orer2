<template>
  <svg ref="svg"></svg>
</template>
<script>
  import * as d3 from 'd3'
  import * as topojson from 'topojson-client'
  import anime from 'animejs/lib/anime.es.js'

  let world = require('../110m.json')
  world = JSON.parse(world)

  export default {
    name: 'LineChart',
    mounted() {
      this.plot()
    },
    methods: {
      plot() {
        const svg = d3.select(this.$refs.svg)
        const styleObj = window.getComputedStyle(svg.node())

        const width = Math.round(
          styleObj.getPropertyValue('width').replace('px', '')
        )
        const height = Math.round(
          styleObj.getPropertyValue('height').replace('px', '')
        )

        const projection = d3
          .geoOrthographic()
          .scale(d3.min([width / 2, height / 2]))
          .rotate([-36, -39])
          .translate([width / 2, height / 2])
          .precision(1)

        const path = d3.geoPath().projection(projection)
        const countries = topojson.feature(world, world.objects.countries)
          .features

        svg
          .append('path')
          .datum({ type: 'Sphere' })
          .attr('d', path)
          .attr('class', 'sphere')

        svg
          .selectAll('path.country')
          .data(countries)
          .enter()
          .append('path')
          .attr('d', path)
          .attr('class', 'country')

        //let coordinate0
        svg
          .call(
            d3
              .drag()
              .on('start', function (event) {
                //coordinate0 = projection.invert([event.x, event.y])
              })
              .on('drag', function (event) {
                const gps = projection.invert([event.x, event.y])
                //const deltaX = coordinate[0] - coordinate0[0]
                //const deltaY = coordinate[1] - coordinate0[1]
                projection.rotate(gps)
                updateGlobe()
              })
              .on('end', function () {})
          )
          .call(
            d3
              .zoom()
              .on('start', function (event) {})
              .on('zoom', function (event) {
                console.log(event.transform.k)
                projection.scale(event.transform.k)
                updateGlobe()
              })
          )

        function updateGlobe() {
          svg.selectAll('path.sphere').attr('d', path({ type: 'Sphere' }))
          svg.selectAll('path.country').attr('d', path)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  svg {
    display: block;
    width: 100%;
    height: calc(100vh - 50px);

    ::v-deep(.sphere) {
      fill: rgb(27, 117, 221);
    }
    ::v-deep(.country) {
      fill: rgb(204, 179, 124);
      stroke: black;
      stroke-width: 0.1;
    }
  }
</style>
