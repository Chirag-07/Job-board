import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import JobModal from './JobModal'


import Singlejob from './Singlejob'


  export default function Multijob({ multijob }) {

    const [open, setOpen] = React.useState(false);
    const [selectedJob, selectJob] = React.useState({});
  
    const lenJobs = multijob.length;
    const numPages = Math.ceil(lenJobs/5);
    const [activeStep, setActiveStep] = React.useState(0);
    
    const jobPerPage = multijob.slice(activeStep*5, (activeStep*5)+5)

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
      };

    return (
        <div className="multijob">
            <JobModal open={open} job={selectedJob} handleClose = {handleClose}/>
            <Typography variant = 'h3' component='h1'>
                Internship - Software Developer
            </Typography>
            <Typography variant="h6">
                Found {lenJobs} Jobs !
            </Typography>
            {
                // multijob.map(
                //     singlejob => <Singlejob singlejob = {singlejob} />
                // )
                jobPerPage.map(
                    (singlejob,i) => <Singlejob key={i} singlejob={singlejob} onClick={ () => {
                        handleClickOpen();
                        selectJob(singlejob) }} />
                )
            }
            <div>
                Page {activeStep + 1} of {numPages}
            </div>
            <MobileStepper
            variant="dots"
            steps={numPages}
            position="static"
            activeStep={activeStep}
            nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === numPages-1}>
                Next
                { <KeyboardArrowRight />}
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                { <KeyboardArrowLeft />}
                Back
                </Button>
            } />

        </div>
    );
}