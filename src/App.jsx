
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Notfound from "./pages/Notfound"
import Projectsection from "./pages/Projectsection"
import Skillssection from "./pages/Skillssection"
import { Toaster } from "sonner"
function App() {
  return (
    <>
    <Toaster richColors position="top-right" />
     <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home/>}/>
          <Route path="/skills" element={<Skillssection/>} />
           <Route path="/projects" element={<Projectsection/>} />
          <Route path="*" element={<Notfound/>}/>
        </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
