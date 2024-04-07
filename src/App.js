import { Box, Stack } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import IntroPanel from "./components/IntroPanel";
import WhyChooseUs from "./components/WhyChooseUs";
import GridArea from "./components/GridArea";
import Clients from "./components/Clients";
import TeamPanel from "./components/TeamPanel";
import FAQ from "./components/FAQ";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <Box sx={{ backgroundColor: "page.main" }}>
      <Box sx={{ backgroundColor: "page.secondary" }} mb={4}>
        <Header />
        <HeroSection />
      </Box>
      <Stack spacing={4} mb={4} mx={3}>
        <IntroPanel />
        <WhyChooseUs />
        <GridArea />
        <Clients />
        <TeamPanel />
        <FAQ />
        <NewsLetter />
      </Stack>
      <Footer />
    </Box>
  );
}

export default App;
