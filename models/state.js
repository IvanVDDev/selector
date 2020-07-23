import ScheduleRow from "./scheduleRow"

export default class State {

    constructor(){
        this.rows = [new ScheduleRow()]
        this.lastId = 1
    }

    getRowById(id) {
        return this.rows.filter(row => row.id == id)[0]
    }
}