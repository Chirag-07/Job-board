let fetch = require('node-fetch');
let redis = require("redis"),
client = redis.createClient();

const {promisify} = require('util');
const setAsync = promisify(client.set).bind(client);

const url = "https://jobs.github.com/positions.json?description=python";

let count = 1, page = 1
const job_list=[];



async function getGitJobs () {
    
    while(count > 0){
        const res = await fetch(`${url}&page=${page}`);
        const jobs = await res.json()
        job_list.push(...jobs);
        count = jobs.length;
        console.log("Showing:", jobs.length, "jobs");
        page++;
    }
    // count=1;
    console.log("Total Jobs: "+job_list.length);
    // const success = await setAsync('Github', JSON.stringify(job_list));

    // console.log({success})

    const internJobs = job_list.filter(job => {
        let jobTitle = job.title.toLowerCase();
        // let isIntern = true;

        // if ( jobTitle.includes('manager') ||
        //      jobTitle.includes('junior') ||
        //      jobTitle.includes('mg.') ||
        //      jobTitle.includes('jr.')
        //     ) {
        //     // isIntern=false;
        //     return false;
        // }else return true;
        if (jobTitle.includes('Senior') ){
            return true;
        }else return false
    })
    console.log(internJobs);
    console.log("Filtered Data:", internJobs.length);
    
    const success = await setAsync('Github', JSON.stringify(internJobs));
    console.log({success});

}



getGitJobs();

module.exports = getGitJobs;
