<template>
  <svg ref="svg"></svg>
</template>
<script>
  import * as d3 from 'd3'
  import * as topojson from 'topojson-client'
  import anime from 'animejs/lib/anime.es.js'
  import versor from 'versor'

  let world = require('../110m.json')
  world = JSON.parse(world)

  export default {
    name: 'LineChart',
    data() {
      return {
        cities: [
          /** [Longitude, Latitude] */
          { name: 'adana', coordinates: [35.321335, 37.0] },
          { name: 'mersin', coordinates: [34.641479, 36.812103] }
        ],
        v0: 0,
        v1: 0,
        q0: 0,
        q1: 0,
        r0: 0,
        r1: 0
      }
    },
    computed: {
      svg: function () {
        return d3.select(this.$refs.svg)
      },
      styleObj: function () {
        return window.getComputedStyle(this.svg.node())
      },
      width: function () {
        return Math.round(
          this.styleObj.getPropertyValue('width').replace('px', '')
        )
      },
      height: function () {
        return Math.round(
          this.styleObj.getPropertyValue('height').replace('px', '')
        )
      },
      projection: function () {
        return d3
          .geoOrthographic()
          .scale(d3.min([this.width / 2, this.height / 2]))
          .rotate([-36, -39])
          .translate([this.width / 2, this.height / 2])
          .precision(1)
      },
      path: function () {
        return d3.geoPath().projection(this.projection)
      },
      points: function () {
        return this.cities.map((d) => {
          return { type: 'Point', coordinates: d.coordinates }
        })
      },
      lines: function () {
        return this.cities.reduce(
          (a, v) => {
            return {
              type: 'LineString',
              coordinates: [...a.coordinates, v.coordinates]
            }
          },
          { type: 'LineString', coordinates: [] }
        )
      },
      countries: function () {
        return topojson.feature(world, world.objects.countries).features
      },
      s0: function () {
        return this.projection.scale()
      }
    },
    mounted() {
      this.plot()
    },
    methods: {
      updateGlobe() {
        this.svg
          .selectAll('path.sphere')
          .attr('d', this.path({ type: 'Sphere' }))
        this.svg.selectAll('path.country').attr('d', this.path)
        this.svg.selectAll('path.city').attr('d', this.path)
      },
      plot() {
        this.svg
          .call(
            d3
              .drag()
              .on('start', (event) => {
                this.v0 = versor.cartesian(
                  this.projection.invert([event.x, event.y])
                )
                this.r0 = this.projection.rotate()
                this.q0 = versor(this.r0)
              })
              .on('drag', (event) => {
                this.v1 = versor.cartesian(
                  this.projection.rotate(this.r0).invert([event.x, event.y])
                )
                this.q1 = versor.multiply(
                  this.q0,
                  versor.delta(this.v0, this.v1)
                )
                this.r1 = versor.rotation(this.q1)
                if (this.r1) {
                  this.projection.rotate(this.r1)
                  this.updateGlobe()
                }
              })
              .on('end', () => {})
          )
          .call(
            d3
              .zoom()
              .scaleExtent([1, 20])
              .on('zoom', (event) => {
                this.projection.scale(this.s0 * event.transform.k)
                this.updateGlobe()
              })
          )

        this.svg
          .append('path')
          .datum({ type: 'Sphere' })
          .attr('d', this.path)
          .attr('class', 'sphere')

        this.svg
          .selectAll('path.country')
          .data(this.countries)
          .enter()
          .append('path')
          .attr('d', this.path)
          .attr('class', 'country')

        this.svg
          .append('path')
          .datum(this.lines)
          .attr('d', this.path)
          .attr('class', 'city')
          .attr('fill', 'black')
          .attr('stroke', 'black')
          .attr('stroke-width', 3)
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
      fill: rgb(209, 205, 196);
      stroke: black;
      stroke-width: 0.1;
    }
  }
</style>
