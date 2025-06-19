import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Events from './pages/Events'
import Footer from "./components/Footer"
import EventDetails from "./pages/EventDetails"
import Home from "./pages/Home"
import Form from "./components/Form"
import Team from "./pages/Team"
import FAQ from "./pages/FAQ"
import Developer from "./pages/Developer"
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/events" element={<Events />} />
        <Route path="/event/:eventId" element={<EventDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/register" element={<Form />} />
        <Route path="/developers" element={<Developer />} />
        <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
