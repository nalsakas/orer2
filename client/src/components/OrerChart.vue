<template>
  <div class="toolbar">
    <button class="btn_offsets" @click.prevent="offsets">Ofsetler...</button>
  </div>
  <div v-if="line" ref="offsets" class="offsets hidden">
    <form action="" @submit.prevent>
      <div
        v-for="ls in line.lineStations"
        :key="ls.station.id"
        class="form-group"
      >
        <label>
          {{ ls.station.name }}
          <input
            v-model.number="ls.offset"
            type="number"
            min="-999"
            max="999"
          />
        </label>
      </div>
    </form>
  </div>
  <div ref="svg" class="svg"></div>
</template>

<script>
  import * as d3 from 'd3'
  import _ from 'underscore'
  import { getLineById } from '../service/line'
  import { getOrers } from '../service/orer'

  export default {
    name: 'OrerChart',
    props: {
      lineId: { type: String, required: true }
    },
    emits: [],
    data() {
      return {
        line: null,
        orers: null,
        totalWidth: window.innerWidth,
        totalHeight: window.innerHeight - 200
      }
    },
    watch: {
      totalHeight: _.debounce(function (value) {
        this.plot()
      }, 2000),
      totalWidth: _.debounce(function (value) {
        this.plot()
      }, 2000),
      line: {
        handler: _.debounce(function (value) {
          this.plot()
        }, 2000),
        deep: true
      }
    },
    async mounted() {
      //await this.resizeHandler()
      await this.loadData()
      await this.plot()
    },
    methods: {
      resizeHandler() {
        window.addEventListener('resize', () => {
          this.totalWidth = window.innerWidth
          this.totalHeight = window.innerHeight - 200
        })
      },
      offsets() {
        this.$refs.offsets.classList.toggle('hidden')
      },
      async loadData() {
        this.line = await getLineById(this.lineId)
        this.orers = await getOrers()
      },
      plot() {
        const line = this.line
        const orers = this.orers

        const margin = {
          left: 400,
          right: 50,
          top: 120,
          bottom: 30
        }
        const width = this.totalWidth - margin.left - margin.right
        const height = this.totalHeight - margin.top - margin.bottom
        const altitudeChartPos = 80
        const schemaChartPos = 100
        const stationNamesPos = 230
        const kmPos = 300
        const kmBetweenPos = 370

        // 24 hours 10 min interval
        const dataDomainX = d3.range(0, 24 * 60, 10)

        const scaleX = d3
          .scaleTime()
          .domain([new Date(2000, 0, 1, 0, 0), new Date(2000, 0, 1, 23, 59)])
          .range([0, width])

        const scaleY = d3
          .scaleLinear()
          .domain([
            d3.min(line.lineStations, (ls) => ls.km),
            d3.max(line.lineStations, (ls) => ls.km)
          ])
          .range([0, height])

        const scaleGridX = d3
          .scaleLinear()
          .domain(d3.extent(dataDomainX))
          .range([0, width])

        const scaleAltitudeX = d3
          .scaleLinear()
          .domain([
            d3.min(line.lineStations, (d) => {
              return d.km
            }),
            d3.max(line.lineStations, (d) => {
              return d.km
            })
          ])
          .range([0, height])

        const scaleAltitudeY = d3
          .scaleLinear()
          .domain([
            d3.min(line.lineStations, (d) => {
              return d.station.altitude
            }),
            d3.max(line.lineStations, (d) => {
              return d.station.altitude
            })
          ])
          .range([0, 50])

        // Remove all plots
        d3.select(this.$refs.svg).select('svg').remove()

        // Create new ones
        const svg = d3
          .select(this.$refs.svg)
          .append('svg')
          .attr('width', this.totalWidth)
          .attr('height', this.totalHeight)

        const gGridX = svg
          .append('g')
          .attr('class', 'gridX')
          .attr('transform', `translate(${margin.left}, ${margin.top})`)

        const gGridY = svg
          .append('g')
          .attr('class', 'gridY')
          .attr('transform', `translate(${margin.left}, ${margin.top})`)

        const gTopHours = svg
          .append('g')
          .attr('class', 'topHours')
          .attr('transform', `translate(${margin.left}, ${margin.top})`)

        const gBottomHours = svg
          .append('g')
          .attr('class', 'bottomHours')
          .attr('transform', `translate(${margin.left}, ${margin.top})`)

        const gRightLabel = svg
          .append('g')
          .attr('class', 'rightLabel')
          .attr('transform', `translate(${margin.left}, ${margin.top})`)

        const gLeftLabel = svg
          .append('g')
          .attr('class', 'leftLabel')
          .attr('transform', `translate(${margin.left}, ${margin.top})`)

        const gKmBetween = svg
          .append('g')
          .attr('class', 'leftLineKm')
          .attr('transform', `translate(${kmBetweenPos}, ${margin.top})`)

        const gKm = svg
          .append('g')
          .attr('class', 'leftLineKmBetween')
          .attr('transform', `translate(${kmPos}, ${margin.top})`)

        const gStationName = svg
          .append('g')
          .attr('class', 'leftLineStation')
          .attr('transform', `translate(${stationNamesPos}, ${margin.top})`)

        const gSchema = svg
          .append('g')
          .attr('class', 'leftLineStationSchema')
          .attr('transform', `translate(${schemaChartPos}, ${margin.top})`)

        const gAltitude = svg
          .append('g')
          .attr('class', 'leftLineStationAltitude')
          .attr(
            'transform',
            `translate(${altitudeChartPos}, ${margin.top}) rotate(90)`
          )
        const gCompany = svg
          .append('g')
          .attr('class', 'company')
          .attr('transform', `translate(0, 0)`)

        const gTitle = svg
          .append('g')
          .attr('class', 'title')
          .attr(
            'transform',
            `translate(${margin.left + width / 2}, ${margin.top})`
          )

        const gMain = svg
          .append('g')
          .attr('class', 'lines')
          .attr('transform', `translate(${margin.left}, ${margin.top})`)

        // Company
        gCompany
          .append('text')
          .html(
            `<tspan x = 20 dy = 1.2em>T.C.</tspan>` +
              `<tspan x = 20 dy = 1.2em>Devlet Demiryolları İşletmesi</tspan>` +
              `<tspan x = 20 dy = 1.2em>Genel Müdürlüğü</tspan>`
          )
          .attr('x', 20)
          .attr('y', 10)
          .attr('font-weight', 800)

        // Title
        gTitle
          .append('text')
          .text(`${line.name} Hat Kesimi`)
          .attr('x', 0)
          .attr('y', 0)
          .attr('dy', '-4em')
          .attr('text-anchor', 'start')
          .attr('font-weight', 800)

        // Create GridX
        gGridX
          .selectAll('line')
          .data(dataDomainX, (d, i) => {
            return d
          })
          .enter()
          .append('line')
          .attr('x1', (d, i) => scaleGridX(d))
          .attr('x2', (d, i) => scaleGridX(d))
          .attr('y1', 0)
          .attr('y2', height)
          .attr('stroke', 'red')
          .attr('stroke-dasharray', (d, i) => {
            if (d % 60 == 0) {
              return ''
            } else {
              return '3,1'
            }
          })
          .attr('stroke-width', (d, i) => {
            if (d % 60 == 0) {
              return 1
            } else {
              return 0.5
            }
          })

        // Create GridY
        gGridY
          .selectAll('line')
          .data(line.lineStations)
          .enter()
          .append('line')
          .attr('x1', -10)
          .attr('x2', width)
          .attr('y1', (d, i) => {
            return scaleY(d.km) + parseInt(d.offset)
          })
          .attr('y2', (d, i) => {
            return scaleY(d.km) + parseInt(d.offset)
          })
          .attr('stroke', 'red')
          .attr('stroke-width', 1)

        // Create Bottom Hours
        gBottomHours
          .selectAll('text')
          .data(dataDomainX, (d, i) => {
            return d
          })
          .enter()
          .append('text')
          .text((d, i) => {
            if (d % 60 == 0) {
              return d / 60
            }
          })
          .attr('x', (d) => scaleGridX(d))
          .attr('y', height)
          .attr('dy', 25)
          .attr('dx', -5)

        // Create Top Hours
        gTopHours
          .selectAll('text')
          .data(dataDomainX, (d, i) => {
            return d
          })
          .enter()
          .append('text')
          .text((d, i) => {
            if (d % 60 == 0) {
              return d / 60
            }
          })
          .attr('x', (d) => scaleGridX(d))
          .attr('y', 0)
          .attr('dy', -15)
          .attr('dx', -5)

        // Create kms
        gKm
          .selectAll('text')
          .data(line.lineStations)
          .enter()
          .append('text')
          .attr('text-anchor', 'end')
          .text((d, i) => {
            return d.km
          })
          .attr('x', 0)
          .attr('y', (d, i) => {
            return scaleY(d.km) + parseInt(d.offset)
          })
          .attr('dy', 5)
          .attr('dx', 0)

        // Create kms between
        gKmBetween
          .selectAll('text')
          .data(line.lineStations)
          .enter()
          .append('text')
          .attr('text-anchor', 'end')
          .text((d, i) => {
            if (i !== line.lineStations.length - 1) {
              return line.lineStations[i + 1].km - line.lineStations[i].km
            }
          })
          .attr('x', 0)
          .attr('y', (d, i) => {
            if (i !== line.lineStations.length - 1) {
              return (
                scaleY(line.lineStations[i].km) +
                parseInt(line.lineStations[i].offset) +
                (scaleY(line.lineStations[i + 1].km) -
                  scaleY(line.lineStations[i].km)) /
                  2
              )
            }
          })
          .attr('dy', 5)
          .attr('dx', 0)

        // Create Left Line Stations
        gStationName
          .selectAll('text')
          .data(line.lineStations)
          .enter()
          .append('text')
          .attr('text-anchor', 'end')
          .text((d, i) => {
            return d.station.name
          })
          .attr('x', 0)
          .attr('y', (d, i) => {
            return scaleY(d.km) + parseInt(d.offset)
          })
          .attr('dy', 5)
          .attr('dx', 0)
          .attr('font-weight', 800)

        // Rakım area generator
        const altitudeAreaGenerator = d3
          .area()
          .x((d) => {
            return scaleAltitudeX(d.km) + parseInt(d.offset)
          })
          .y0((d) => {
            return scaleAltitudeY(0)
          })
          .y1((d) => {
            return scaleAltitudeY(d.station.altitude)
          })

        // Create Rakım area path
        gAltitude
          .append('path')
          .attr('class', 'area')
          .attr('d', altitudeAreaGenerator(line.lineStations))
          .attr('fill', 'none')
          .attr('stroke', 'black')
          .attr('stroke-width', 1)

        // Rakım dikey generator
        function altitudeLineGenerator() {
          const path = d3.path()
          line.lineStations.forEach((ls, i, arr) => {
            if (i == 0 && i == arr.length) {
              return
            }
            path.moveTo(
              scaleAltitudeX(ls.km) + parseInt(ls.offset),
              scaleAltitudeY(0)
            )
            path.lineTo(
              scaleAltitudeX(ls.km) + parseInt(ls.offset),
              scaleAltitudeY(ls.station.altitude)
            )
          })
          return path
        }

        // Create Rakım Vertical Paths
        gAltitude
          .append('path')
          .attr('class', 'verticalLines')
          .attr('d', altitudeLineGenerator())
          .attr('fill', 'none')
          .attr('stroke', 'black')
          .attr('stroke-width', 1)

        // Create Rakım Texts
        gAltitude
          .selectAll('text')
          .data(line.lineStations)
          .enter()
          .append('text')
          .text((d) => {
            return d.station.altitude
          })
          .attr('x', (d) => {
            return scaleAltitudeX(d.km) + parseInt(d.offset)
          })
          .attr('y', (d) => {
            return 50
          })
          .attr('dx', -1)
          .attr('dy', 6)
          .attr('text-anchor', 'end')
          .attr('transform', (d, i, sel) => {
            const cx = d3.select(sel[i]).attr('x')
            const cy = d3.select(sel[i]).attr('y')
            return `rotate(-90, ${cx}, ${cy})`
          })

        // Create Orer lines
        gMain
          .selectAll('path')
          .data(orers, (d, i) => {
            return d.id
          })
          .enter()
          .append('path')
          .attr('d', generate)
          .attr('id', (d) => d.name)
          .attr('fill', 'none')
          .attr('stroke', 'black')
          .attr('stroke-width', 3)
          .attr('stroke-linecap', 'butt')
          .attr('stroke-linejoin', 'round')

        // Create orer id tags
        gMain
          .selectAll('.bottomText')
          .data(orers, (d, i) => {
            return d.id
          })
          .enter()
          .append('text')
          .attr('class', 'bottomText')
          .attr('dx', 0)
          .attr('dy', -2)
          .append('textPath')
          .text((d) => d.name)
          .attr('href', (d) => `#${d.name}`)
          .attr('startOffset', '1%')
          .call(
            d3.drag().on('drag', function (e, d) {
              e.sourceEvent.preventDefault()
              const pointer = d3.pointer(e, gMain.node())

              if (d.orerStations[1].km - d.orerStations[0].km > 0) {
                d3.select(this).attr('startOffset', pointer[1])
              } else {
                d3.select(this).attr('startOffset', height - pointer[1])
              }
            })
          )
          .attr('cursor', 'move')

        // Create Top text
        gMain
          .selectAll('.topText')
          .data(orers, (d, i) => {
            return d.id
          })
          .enter()
          .append('text')
          .attr('class', 'topText')
          .attr('dx', 0)
          .attr('dy', -2)
          .append('textPath')
          .text((d) => d.name)
          .attr('href', (d) => `#${d.name}`)
          .attr('startOffset', '95%')
          .call(
            d3.drag().on('drag', function (e, d) {
              e.sourceEvent.preventDefault()
              const pointer = d3.pointer(e, gMain.node())

              if (d.orerStations[1].km - d.orerStations[0].km > 0) {
                d3.select(this).attr('startOffset', pointer[1])
              } else {
                d3.select(this).attr('startOffset', height - pointer[1])
              }
            })
          )
          .attr('cursor', 'move')

        // Create Circles along the path
        gMain
          .selectAll('.circles')
          .data(orers, (d, i) => {
            return d.id
          })
          .enter()
          .append('g')
          .attr('class', 'circles')
          .selectAll('circle')
          .data((d) => d.orerStations)
          .enter()
          .append('circle')
          .attr('cx', (d) => {
            let x = 0
            if (d.departure) {
              const departure = splitHoursMinutes(d.departure)
              x = scaleX(new Date(2000, 0, 1, +departure[0], +departure[1]))
            } else if (d.arrival) {
              const arrival = splitHoursMinutes(d.arrival)
              x = scaleX(new Date(2000, 0, 1, +arrival[0], +arrival[1]))
            }
            return x
          })
          .attr('cy', (d) => {
            let y = 0
            const lineStation = line.lineStations.find(
              (ls) => ls.stationId == d.stationId
            )
            if (lineStation) {
              y = scaleY(d.km) + parseInt(lineStation.offset)
            }
            return y
          })
          .attr('r', 4)
          .attr('fill', 'none')
          .attr('stroke-width', 1)
          .attr('stroke', 'red')

        // Create minutes around stations on path
        gMain
          .selectAll('.minutes')
          .data(orers, (d, i) => {
            return d.id
          })
          .enter()
          .append('g')
          .attr('class', 'minutes')
          .selectAll('text')
          .data((d) => d.orerStations)
          .enter()
          .append('text')
          .text((d) => {
            let minutes = ''
            if (d.departure) {
              const departure = splitHoursMinutes(d.departure)
              minutes = departure[1]
            } else if (d.arrival) {
              const arrival = splitHoursMinutes(d.arrival)
              minutes = arrival[1]
            }
            return minutes
          })
          .attr('x', (d) => {
            let x = 0
            if (d.departure) {
              const departure = splitHoursMinutes(d.departure)
              x = scaleX(new Date(2000, 0, 1, +departure[0], +departure[1]))
            } else if (d.arrival) {
              const arrival = splitHoursMinutes(d.arrival)
              x = scaleX(new Date(2000, 0, 1, +arrival[0], +arrival[1]))
            }
            return x
          })
          .attr('y', (d) => {
            let y = 0
            const lineStation = line.lineStations.find(
              (ls) => ls.stationId == d.stationId
            )
            if (lineStation) {
              y = scaleY(d.km) + parseInt(lineStation.offset)
            }
            return y
          })
          .attr('dx', 5)
          .attr('dy', 4)
          .attr('text-anchor', 'start')
          //.attr('font-size', 10)
          .attr('font-weight', 400)
          .attr('class', 'minutes')

        /** @param(d):Orer @param(i):index
         * Orer Path generator
         */
        function generate(d, i) {
          const path = d3.path()
          d.orerStations.forEach((os, j) => {
            if (os.km === null) {
              throw new Error('Orer Km boş olamaz')
            }
            if (os.departure === null && os.arrival === null) {
              throw new Error('Orer variş ve kalkış saatleri boş olamaz')
            }

            if (j == 0) {
              if (os.arrival !== null) {
                let lineStation = line.lineStations.find(
                  (ls) => ls.stationId == os.stationId
                )
                if (lineStation) {
                  let arrival = splitHoursMinutes(os.arrival)
                  let x = scaleX(new Date(2000, 0, 1, +arrival[0], +arrival[1]))
                  let y = scaleY(os.km) + parseInt(lineStation.offset)
                  path.moveTo(x, y)
                }
              } else if (os.departure !== null) {
                let lineStation = line.lineStations.find(
                  (s) => s.stationId == os.stationId
                )
                if (lineStation) {
                  let departure = splitHoursMinutes(os.departure)
                  let x = scaleX(
                    new Date(2000, 0, 1, +departure[0], +departure[1])
                  )
                  let y = scaleY(os.km) + parseInt(lineStation.offset)
                  path.moveTo(x, y)
                }
              }
            }

            if (os.arrival !== null) {
              let lineStation = line.lineStations.find(
                (s) => s.stationId == os.stationId
              )
              if (lineStation) {
                let arrival = splitHoursMinutes(os.arrival)
                let x = scaleX(new Date(2000, 0, 1, +arrival[0], +arrival[1]))
                let y = scaleY(os.km) + parseInt(lineStation.offset)
                path.lineTo(x, y)
              }
            }

            if (os.departure !== null) {
              let lineStation = line.lineStations.find(
                (s) => s.stationId == os.stationId
              )
              if (lineStation) {
                let departure = splitHoursMinutes(os.departure)
                let x = scaleX(
                  new Date(2000, 0, 1, +departure[0], +departure[1])
                )
                let y = scaleY(os.km) + parseInt(lineStation.offset)
                path.lineTo(x, y)
              }
            }
          })
          return path
        }
        // @returns [hour, minute]
        function splitHoursMinutes(dateTime) {
          const time = dateTime.split('T')[1]
          const hoursMinutes = time.split(':')
          const [hours, minutes] = hoursMinutes
          return [hours, minutes]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toolbar {
    font-size: 1rem;
    box-shadow: 1px 1px 2px black;
    background-color: rgba(255, 255, 255, 1);
  }
  .btn_offsets {
    padding: 2px 5px;
    color: white;
    background-color: rgb(218, 93, 71);
    border: none;
    outline: none;
    &:hover {
      background-color: rgb(216, 139, 126);
    }
  }
  .hidden {
    display: none;
  }
  .form-group {
    display: inline-block;
    margin-right: 2px;
  }
</style>
