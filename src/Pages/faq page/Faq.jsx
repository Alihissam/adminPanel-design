import React from 'react'
import "./faqpage.css"
import { Box, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Faq = () => {
    return (
        <div style={{ padding: "20px" }}>
            <div>

                <h2 >FAQ PAGES</h2>
                <span className='subtitle'>Frequent asked question page</span>
            </div>

            {/* <--1---> */}

            <Accordion defaultExpanded style={{ backgroundColor: "#212121", color: "white" }}>
                <AccordionSummary style={{ color: "white" }} ExpandMoreIcon={<ExpandMoreIcon />} >
                    <Typography style={{ color: "#13DF9B", fontSize: "12px" }}>
                        Random question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "12px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut laboriosam, corrupti doloribus debitis accusamus quia
                        vero quam a et ex?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* <--2---> */}

            <Accordion defaultExpanded style={{ backgroundColor: "#212121", color: "white" }}>
                <AccordionSummary ExpandMoreIcon={<ExpandMoreIcon />}>
                    <Typography style={{ color: "#13DF9B", fontSize: "12px" }}>
                        Local question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "12px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut laboriosam, corrupti doloribus debitis accusamus quia
                        vero quam a et ex?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* <--3---> */}

            <Accordion defaultExpanded style={{ backgroundColor: "#212121", color: "white" }}>
                <AccordionSummary ExpandMoreIcon={<ExpandMoreIcon />}>
                    <Typography style={{ color: "#13DF9B", fontSize: "12px" }}>
                        An Import question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "12px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut laboriosam, corrupti doloribus debitis accusamus quia
                        vero quam a et ex?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* <--4---> */}

            <Accordion defaultExpanded style={{ backgroundColor: "#212121", color: "white" }}>
                <AccordionSummary ExpandMoreIcon={<ExpandMoreIcon />}>
                    <Typography style={{ color: "#13DF9B", fontSize: "12px" }}>
                        favourite question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "12px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut laboriosam, corrupti doloribus debitis accusamus quia
                        vero quam a et ex?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            {/* <--5---> */}

            <Accordion defaultExpanded style={{ backgroundColor: "#212121", color: "white", }}>
                <AccordionSummary ExpandMoreIcon={<ExpandMoreIcon />}>
                    <Typography style={{ color: "#13DF9B", fontSize: "12px" }}>
                        An Import question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{ fontSize: "12px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut laboriosam, corrupti doloribus debitis accusamus quia
                        vero quam a et ex?
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div >
    )
}

export default Faq
