<template>
  <svg ref="svg"></svg>
</template>
<script>
  import * as d3 from 'd3'
  import * as topojson from 'topojson-client'
  import anime from 'animejs/lib/anime.es.js'

  let world = require('../50m.json')
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

        window.setTimeout(() => {
          const width = Math.round(
            styleObj.getPropertyValue('width').replace('px', '')
          )
          const height = Math.round(
            styleObj.getPropertyValue('height').replace('px', '')
          )

          const projection = d3
            .geoOrthographic()
            .translate([width / 2, height / 2])

          const path = d3.geoPath().projection(projection)

          const countries = topojson.feature(world, world.objects.countries)
            .features

          svg
            .append('path')
            .attr('d', path({ type: 'Sphere' }))
            .attr('class', 'sphere')

          svg
            .selectAll('path.country')
            .data(countries)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('class', 'country')

          let dragX, dragY

          d3.selectAll('path')
            .call(
              d3
                .drag()
                .on('start', function dragged(event) {
                  dragX = event.x
                  dragY = event.y
                })
                .on('drag', function dragged(event) {
                  const dx = event.x - dragX
                  const dy = event.y - dragY
                  projection.rotate([
                    projection.rotate()[0] + event.dx / 10,
                    projection.rotate()[1] - event.dy / 10
                  ])
                  svg
                    .selectAll('path.sphere')
                    .attr('d', path({ type: 'Sphere' }))
                  svg.selectAll('path.country').attr('d', path)
                })
            )
            .call(
              d3.zoom().on('zoom', function (event) {
                console.log(
                  Math.max(400, projection.scale() - event.sourceEvent.deltaY)
                )
                projection.scale(
                  Math.max(400, projection.scale() - event.sourceEvent.deltaY)
                )
                svg.selectAll('path.sphere').attr('d', path({ type: 'Sphere' }))
                svg.selectAll('path.country').attr('d', path)
              })
            )

          const props = {
            rotationX: 0,
            rotationY: 0,
            scale: 400
          }

          anime({
            targets: props,
            easing: 'linear',
            round: 1,
            duration: 2000,
            delay: 1000,
            rotationX: -360 - 36,
            rotationY: -39,
            begin: function () {
              projection.scale(props.scale)
            },
            update: function () {
              projection.rotate([props.rotationX, props.rotationY])
              svg.selectAll('path.sphere').attr('d', path({ type: 'Sphere' }))
              svg.selectAll('path.country').attr('d', path)
            }
          }).finished.then(() => {
            anime({
              targets: props,
              easing: 'linear',
              round: 1,
              duration: 2000,
              delay: 100,
              scale: 4600,
              begin: function () {},
              update: function () {
                projection.scale(props.scale)
                svg.selectAll('path.sphere').attr('d', path({ type: 'Sphere' }))
                svg.selectAll('path.country').attr('d', path)
              }
            })
          })
        }, 0)
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
