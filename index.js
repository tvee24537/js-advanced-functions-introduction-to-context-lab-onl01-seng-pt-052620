// Your code here
function createEmployeeRecord (employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords (employees) {
    return employees.map(x => createEmployeeRecord(x))
}

function createTimeInEvent (record, datestamp) {
    record.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(datestamp.split(" ")[1]),
        date: datestamp.split(" ")[0]
    })
    return record
}

function createTimeOutEvent (record, datestamp) {
    record.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(datestamp.split(" ")[1]),
        date: datestamp.split(" ")[0]
    })
    return record
}

function hoursWorkedOnDate (record, date){
    return (record.timeOutEvents.find( x => x.date === date).hour - record.timeInEvents.find( x => x.date === date).hour)/100
}