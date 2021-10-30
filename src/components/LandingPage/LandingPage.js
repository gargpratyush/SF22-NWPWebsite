import './landingPage.css';
import text from './hitch-hike-txt.png';
import MapApp from './../Map/map-app';

const LandingPage = () => {
    return ( 
        <div>
        <div className="landing-page">
            <img src={text} alt="Hitch Hike" className='hitch-hike-txt'/>
        </div>
        <div className="integrated-map">
            <MapApp/>
        </div>
        </div>
     );
}
 
export default LandingPage;