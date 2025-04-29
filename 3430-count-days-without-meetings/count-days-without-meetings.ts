function countDays(days: number, meetings: number[][]): number {
  meetings.sort((a, b) => a[0]- b[0])
   
    let freeDays = 0;
    let lastOccupiedDay = 0;
    for(const [start, end] of meetings){
        if(start > lastOccupiedDay + 1){
            freeDays += (start - lastOccupiedDay - 1);
        }
        lastOccupiedDay = Math.max(lastOccupiedDay, end);
    }
    if(lastOccupiedDay < days){
        freeDays += (days-lastOccupiedDay);
    }
    return freeDays;
};