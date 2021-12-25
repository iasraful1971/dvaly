import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import './Accordion.css';

const Accordions = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
    return (
        <>
           <div className='container py-5 my-5'>
               <div className='flex-justif-grid'>
                   <div  data-aos='fade-up'>
                     <h1>Do You Have Lot's of Question to Us ? </h1>
                         <p>The Accordion microtemplate acts much like the FAQ microtemplate, in that it collapses text in order to tighten and style your page. This is a good way to feature a list of important ideas or resources on your page. Selecting this template places the same code on your page as the faq, but with "accordion collapsed" and "/accordion" framing the template. Here's what it adds: The Accordion microtemplate acts much like the FAQ microtemplate, in that it collapses text in order to tighten and style your page. This is a good way to feature a list of important ideas or resources on your page. Selecting this template places the same code on your page as the faq, but with "accordion collapsed" and "/accordion" framing the template. Here's what it adds:</p>
                         <button>explore now</button>
                   </div>
                   <div  data-aos='fade-up'>
                   <Accordion style={{margin:'20px 0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
Do I collect sales tax on my purchase?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We collect and remit sales tax for all products and services delivered to the state of Pennsylvania only at a rate of 8% (origin of sale is Philadelphia county). While we do not collect sales tax for sales delivered to other states at this time, the purchaser is responsible for timely filing and remitting use tax due to their state or municipality.  Please consult a tax professional for additional information in this regar
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{margin:'20px 0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you offer Saving?
 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we offer flexible payment terms through United Midwest Savings Bank.  We encourage you to apply for financing using the following link:

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{margin:'20px 0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you offer in Interest?
 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we offer flexible payment terms through United Midwest Savings Bank.  We encourage you to apply for financing using the following link:

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{margin:'20px 0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do you offer money lendering..?
 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we offer flexible payment terms through United Midwest Savings Bank.  We encourage you to apply for financing using the following link:

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{margin:'20px 0'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Do  I manage my products  ?
 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we offer flexible payment terms through United Midwest Savings Bank.  We encourage you to apply for financing using the following link:

          </Typography>
        </AccordionDetails>
      </Accordion>
                   </div>
               </div>
           </div>
  
        </>
    );
};

export default Accordions;


