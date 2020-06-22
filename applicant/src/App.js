import React from 'react';
import './App.css';

import Multijob from './Multijob'

const api_url = "http://localhost:3001/multijobs";

const mockMultijobs = [
  {title: "Intern-SWE", company: " Amazon"},
  {title: "Intern-SWE", company: " Facebook"},
  {title: "Intern-SWE", company: " Apple"}
]

async function fetchJobs(update_jobs_cb){
  const res = await fetch(api_url);
  const json = await res.json();

  update_jobs_cb(json);
}

function App() {
  const [job_list,update_jobs] = React.useState([]);

  React.useEffect(() => {
    fetchJobs(update_jobs);
  }, [])


  return (
    <div className="App">
      <Multijob multijob={job_list} />
    </div>
  );
}

export default App;
