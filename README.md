# Event timer

Put the next row into your body tag:

`<script src="event_timer.js"></script>`

There is a function **left_time** with the parameters:
- year
- month
- day
- hour
- minute

The parameters are your event date. For example: **left_time(2018, 12, 15, 15, 45);** - 2018-12-15 15:45:00.

Return value is an object (dict) with the keys:
- days
- hours
- minutes
- seconds
