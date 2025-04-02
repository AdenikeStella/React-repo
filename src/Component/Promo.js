const data = {
    heading: "99% discount available on all first time purchases!",
    callToAction: "All items must go!"
}


function Promo(props) {
    return (
        <div className="promo-section">
            <h1>{props.heading}</h1>
                <h2>{props.callToAction}</h2>
            </div>
    );
};

export default Promo;