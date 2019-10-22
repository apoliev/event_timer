function find_time(left_time) {
    let result = {
        'days':0,
        'hours': 0,
        'minutes': 0,
        'seconds': 0
    };

    if(left_time > 0) {
        // Convert time (milliseconds to ...)
        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;

        // Find values
        let left_days = left_time / day;
        result['days'] = parseInt(left_days);

        let left_hours = (left_days - result['days']) * day / hour;
        result['hours'] = parseInt(left_hours);

        let left_minutes = (left_hours - result['hours']) * hour / minute;
        result['minutes'] = parseInt(left_minutes);

        let left_seconds = (left_minutes - result['minutes']) * minute / second;
        result['seconds'] = parseInt(left_seconds);
    }

    return result;
}

function left_time(event_date) {
    let now_date = new Date();

    // how much time is left
    let left = new Date(event_date.getTime() - now_date.getTime());
    left = left.getTime();

    return find_time(left);
}
