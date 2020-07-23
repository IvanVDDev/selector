import $ from 'jquery'

export default class ScheduleRow {
    
    constructor(lastId = 1){
        this.id = lastId++
        this.template = $(`[data-id=${this.id}]`)
        this.date = false
        this.time = false
        this.listItemHeight = 100
        this.dayCount = 6
        this.hoursCount = 6
        this.dayListFullHeight = this.dayCount * this.listItemHeight
        this.hoursListFullHeight = this.hoursCount * this.listItemHeight
    }

    getTemplate() {
        return ` <div class="schedule-item" data-id=${this.id}><div class="schedule-date"><ul class="closed"><li>Monday</li><li>Tuesday</li><li>Wednesday</li><li>Thursday</li><li>Friday</li><li>Saturday</li><li></li></ul></div><div class="schedule-time"><ul class="closed"><li>11:00</li><li>12:00</li><li>13:00</li><li>14:00</li><li>15:00</li><li>16:00</li></ul></div><div class="schedule-manage"></div>`
    }

    isCompleted() {
        return this.date && this.time
    }

    isClosed(list) {
        return this.template.find('.schedule-'+list+' ul').hasClass('closed')
    }

    openDropdown(list) {
        let height = (list == 'date' ? this.dayListFullHeight : this.hoursListFullHeight)
        let listToClose = (list == 'time') ? 'date' : 'time'
        $('ul').addClass('disable')
        this.template.find(`.schedule-${list} ul`).animate({height: `${height}px`}, 1000, () => {
          $('ul').removeClass('disable')
        }).removeClass('closed').addClass('opened')
        if(!this.isClosed(listToClose)) this.closeDropdown(listToClose)
    }

    closeDropdown(list) {
        this.template.find(`.schedule-${list} ul`).animate({height: `${this.listItemHeight}px`}, 1000).addClass('closed').removeClass('opened')
    }
}