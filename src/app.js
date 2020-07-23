import $ from 'jquery'
import State from '../models/state';
import ScheduleRow from '../models/scheduleRow';

$(() => {
  // Your jQuery code goes here

    let state = new State()

    $('.schedule-date ul.closed').on('click', function(){
      let rowId = $(this).parents('.schedule-item').data('id')
      let row = state.getRowById(rowId)
      row.openDropdown('date')
    })

    $('.schedule-time ul.closed').on('click', function(){
      let rowId = $(this).parents('.schedule-item').data('id')
      let row = state.getRowById(rowId)
      row.openDropdown('time')
    })

    $('.schedule-date ul.opened li').on('click', function(e) {
      let rowId = $(this).parents('.schedule-item').data('id')
      let row = state.getRowById(rowId)
      row.closeDropdown('date')
      row.date = $(this).text()
    })

    $('.schedule-time ul.opened li').on('click', function(e) {
      let rowId = $(this).parents('.schedule-item').data('id')
      let row = state.getRowById(rowId)
      row.time = $(this).text()
      row.closeDropdown('time')
    })
})
