import { Box,useColorModeValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import CreatePage  from "./pages/CreatePage";
import PageNotFound from "./pages/pageNotFound";


function App() {
  

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/Create" element={<CreatePage />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Box>
  )
}

export default App
