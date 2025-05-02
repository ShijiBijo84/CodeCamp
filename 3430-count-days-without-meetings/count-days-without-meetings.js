/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    meetings.sort((a,b)=>a[0]-b[0]);
    let lastOccupiedDay = 0;
    let freeDays=0;
    for(const meeting of meetings){
        if(meeting[0]>lastOccupiedDay){
            freeDays+=meeting[0]-lastOccupiedDay-1
            lastOccupiedDay = meeting[1]
        }else{
            if(meeting[1]>lastOccupiedDay){
                lastOccupiedDay = meeting[1]
            }
        }
        
    }
    if(days>lastOccupiedDay) freeDays=freeDays+days-lastOccupiedDay
    return freeDays
};