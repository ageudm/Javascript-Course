//Data-objec and Method

let d = new Date();

// d = d.toString();
// d = new Date('11, 22, 2023, 12:30:50')
// d = d.getDate();
// d = d.getDay();
// d = d.getFullYear();
// d = d.getHours();
// d = d.getMilliseconds();
// d = d.getMinutes();
// d = d.getMonth();
// d = d.getSeconds();

// d = d.toLocaleString('default', {month: 'short'});

// d = Intl.DateTimeFormat('en-US').format(d);
// d = Intl.DateTimeFormat('en-GB').format(d);
// d = Intl.DateTimeFormat('default').format(d);
// d = Intl.DateTimeFormat('default', {month: 'long'}).format(d);
d = Intl.DateTimeFormat('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Africa/Luanda',

}).format(d);


console.log(d);