let cron = require('node-cron');


const getGitJobs = require('./tasks/getJobs');

cron.schedule(' */1 * * * *', () => {
//   console.log('running a task every second');
getGitJobs()
})