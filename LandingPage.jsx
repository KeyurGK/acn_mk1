import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"

function LandingPage(){
    return (
        <Router>
            <div> 
                {/* <Header/> */}
        {/* <Sidebar/> */}
        <Routes>
            <Route path="/" element={<Form/>}/>
            <Route path="/document/:type" element={<Document/>} />
            {/* <Route path="/document/nda" element={<Form/>}/>
            <Route path="/documemnt/govt" element={<Form/>}/> */}
            
        </Routes>
       
        {/* <Footer/> */}
        </div>
        </Router>
       
    )
}

export default LandingPage;