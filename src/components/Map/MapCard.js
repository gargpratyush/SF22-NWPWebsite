
const MapCard = ({ city }) => {

    return (
        <>
        <div className="map-card" style={{ left: city.cardx, top: city.cardy }}>
            <div className="map-card-image" style={{ backgroundImage: `url(${city.image})` }} alt={city.tag}></div>

            <h4 className="map-card-heading">
                {city.name}
            </h4>

            <div className="map-card-text">
                Click on the pin to go to the city's events page &rarr;
            </div>
        </div>

        </>
    );
}

export default MapCard;

