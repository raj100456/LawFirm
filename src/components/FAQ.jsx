import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ReactComponent as ExpandMoreIcon } from "../assets/add.svg";

const FAQ = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "1",
        height: "80vh",
        mx:"1rem",
        my:"1rem",
        boxSizing:"border-box",
      }}
      p={3}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
          marginTop: "inherit",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            width: "40vw",
          }}
        >
          FAQ
        </Typography>
        <Typography variant="caption" sx={{ opacity: "0.3" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          fugiat magnam repellendus
        </Typography>
      </Box>
      <Box>
        <Box p={2}>
          <Typography variant="body1" fontWeight={"bold"}>
            Do I need a personal injury report ?
          </Typography>
          <br />
          <Typography variant="caption" sx={{ opacity: "0.3" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            fugiat magnam repellendus recusandae voluptas, quod, temporibus
            reprehenderit praesentium ipsam vitae officia tempora similique
            autem dicta laboriosam. Odio velit distinctio aliquid?
          </Typography>
        </Box>
        <br />
        <br />
        <Divider
          variant="middle"
          sx={{
            display: "flex",
            backgroundColor: "#6A6A6A",
            borderWidth: "0.5px",
            // height: "50%",
          }}
        />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography fontWeight={"bold"}>
              How much is my case worth?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="caption" sx={{ opacity: "0.3" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              fugiat magnam repellendus recusandae voluptas, quod, temporibus
              reprehenderit praesentium ipsam vitae officia tempora similique
              autem dicta laboriosam. Odio velit distinctio aliquid?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider
          variant="middle"
          sx={{
            display: "flex",
            backgroundColor: "#6A6A6A",
            borderWidth: "0.5px",
            // height: "50%",
          }}
        />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography fontWeight={"bold"}>
              What should I do right after car accidect
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="caption" sx={{ opacity: "0.3" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              fugiat magnam repellendus recusandae voluptas, quod, temporibus
              reprehenderit praesentium ipsam vitae officia tempora similique
              autem dicta laboriosam. Odio velit distinctio aliquid?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Divider
          variant="middle"
          sx={{
            display: "flex",
            backgroundColor: "#6A6A6A",
            borderWidth: "0.5px",
            // height: "50%",
          }}
        />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography fontWeight={"bold"}>
              How much is my case worth?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="caption" sx={{ opacity: "0.3" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              fugiat magnam repellendus recusandae voluptas, quod, temporibus
              reprehenderit praesentium ipsam vitae officia tempora similique
              autem dicta laboriosam. Odio velit distinctio aliquid?
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
