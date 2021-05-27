import React from "react";
import "./styles/FAQScreen.css";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Footer from "../components/Footer";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "100%",
    flexShrink: 0
  }
}));

function FAQScreen() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="faqScreen">
      <h1>Frequently Asked Questions</h1>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            What is the status of my order?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We have you covered! We will email you as items in your order ship,
            or if there are updates on the status of your order. Can't find the
            email? Click here to check the status of your order. COVID-19
            potential delivery delay: our carriers are currently experiencing
            delays in delivery. We apologize for the inconvenience this may
            cause.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            My discount code is not working, what do I do?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are sorry you are having trouble checking out, please note that
            some discount codes require users to create an account on the site
            and be logged in upon check out to utilize the discount code.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            Where is Clothing Shop Online based?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our office is located in sunny Hermosa Beach, California, just a few
            steps from the Pacific Ocean and the kind of people who say "gnarly"
            (really).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            Where are your products shipped from?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We ship from 6 warehouses around the US. With so many shipping
            centers across the country, we provide some of the fastest, most
            affordable delivery options in the industry.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Footer />
    </div>
  );
}

export default FAQScreen;
