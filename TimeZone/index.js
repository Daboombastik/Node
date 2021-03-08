const moment = require('moment');
const timezone = require('moment-timezone');

timezone.tz.setDefault("Europe/Paris");
let targetTimeZone = "America/Los_Angeles";
console.log(moment().format("dddd"));

if (process.argv.length === 3) {
    targetTimeZone = process.argv[2];
    console.log(timezone().tz(targetTimeZone).format());
} else process.exit(0);