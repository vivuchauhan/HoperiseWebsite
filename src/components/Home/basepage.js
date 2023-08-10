import Footer from "../About/Footer";
import Event from "./Upcomingevents/events";
import "./basepage.css";
import Volunteer from "./becomevolunteer/volunterform";
import Donate from "./donate/donate";
import Carousel from "./imagecarousel/carousel";
import Services from "./Services/Services";
import OurTeamComp from '../About/OurTeam';
import Blog from '../blog/Blog';

const Basepage = () => {
    return (
        <div className="containerB">
            <Carousel/>
            <Services/>
            <Donate/>
            <Event/>
            <Volunteer/>
            <OurTeamComp />
            <Footer/>
            
        </div>
    )
}
export default Basepage;