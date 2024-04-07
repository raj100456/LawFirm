import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Autoplay, Navigation, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { ReactComponent as NextIcon } from "../assets/right.svg";
import { ReactComponent as PrevIcon } from "../assets/Left.svg";

// clients
import devon from "../assets/clients/Devon lane.svg";
import jane from "../assets/clients/jane cooper.svg";
import robert from "../assets/clients/robert fox.svg";

// swiper active slide
import "../App.css";

const Clients = () => {
  const nextRef = React.useRef(null);
  const prevRef = React.useRef(null);
  return (
    <Box height={"70vh"}>
      <Box
        sx={{
          display: "flex",
          // flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        p={5}
      >
        <Box>
          <Typography variant="h4">What says our</Typography>
          <Typography variant="h4"> happy Clients</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            marginLeft: "auto",
          }}
        >
          <Button
            ref={nextRef}
            sx={{
              backgroundColor: "transparent",
              // "&:active": {
              //   opacity: "0.4",
              // },
            }}
          >
            <PrevIcon />
          </Button>
          <Button
            ref={prevRef}
            sx={{
              backgroundColor: "transparent",
              // "&:active": {
              //   opacity: "0.4",
              // },
            }}
          >
            <NextIcon />
          </Button>
        </Box>
      </Box>
      <Swiper
        modules={[Virtual, Navigation, Autoplay]}
        centeredSlides={true}
        initialSlide={1}
        slidesPerView={8}
        spaceBetween={30}
        navigation={{
          prevEl: nextRef.current,
          nextEl: prevRef.current,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        speed={1000}
        effect="fade"
        virtual
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 },
          600: { slidesPerView: 2, spaceBetween: 20 },
          960: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 3, spaceBetween: 40 },
          1920: { slidesPerView: 3, spaceBetween: 30 },
        }}
        slideActiveClass="swiper-slide-active"
      >
        {/* {slides.map((item) => ( */}
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "flex-start",
              borderRadius: "0.875rem",
              border: "1.4px solid rgba(255, 255, 255, 0.10)",
              background: "page.main",
            }}
            p={3}
          >
            <img src={devon} width={100} height={100} alt="icon" />
            <Typography variant="h5">98% Success Rate</Typography>
            <Typography variant="h6">Ceo of Hunt</Typography>
            <Typography variant="body1" sx={{ opacity: "0.3" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              voluptatum.
            </Typography>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "flex-start",
              borderRadius: "0.875rem",
              border: "1.4px solid rgba(255, 255, 255, 0.10)",
              background: "#2E2E2E",
            }}
            p={3}
          >
            <img src={jane} width={100} height={100} alt="icon" />
            <Typography variant="h5">100% Success Rate</Typography>
            <Typography variant="h6">Ceo of Hunt</Typography>
            <Typography variant="body1" sx={{ opacity: "0.3" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              voluptatum.
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "flex-start",
              borderRadius: "0.875rem",
              border: "1.4px solid rgba(255, 255, 255, 0.10)",
              background: "page.main",
            }}
            p={3}
          >
            <img src={robert} width={100} height={100} alt="icon" />
            <Typography variant="h5">98% Success Rate</Typography>
            <Typography variant="h6">Ceo of Hunt</Typography>
            <Typography variant="body1" sx={{ opacity: "0.3" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              voluptatum.
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "flex-start",
              borderRadius: "0.875rem",
              border: "1.4px solid rgba(255, 255, 255, 0.10)",
              background: "#2E2E2E",
            }}
            p={3}
          >
            <img src={jane} width={100} height={100} alt="icon" />
            <Typography variant="h5">100% Success Rate</Typography>
            <Typography variant="h6">Ceo of Hunt</Typography>
            <Typography variant="body1" sx={{ opacity: "0.3" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              voluptatum.
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "flex-start",
              borderRadius: "0.875rem",
              border: "1.4px solid rgba(255, 255, 255, 0.10)",
              background: "page.main",
            }}
            p={3}
          >
            <img src={devon} width={100} height={100} alt="icon" />
            <Typography variant="h5">98% Success Rate</Typography>
            <Typography variant="h6">Ceo of Hunt</Typography>
            <Typography variant="body1" sx={{ opacity: "0.3" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              voluptatum.
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "flex-start",
              borderRadius: "0.875rem",
              border: "1.4px solid rgba(255, 255, 255, 0.10)",
              background: "#2E2E2E",
            }}
            p={3}
          >
            <img src={jane} width={100} height={100} alt="icon" />
            <Typography variant="h5">100% Success Rate</Typography>
            <Typography variant="h6">Ceo of Hunt</Typography>
            <Typography variant="body1" sx={{ opacity: "0.3" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              voluptatum.
            </Typography>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
    // </Box>
  );
};

export default Clients;
