import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import "./service-card.styles.css"
// import { animateScroll } from 'react-scroll';



const Card = ({title, imageUrl, history, linkUrl, match, shortDesc} ) => {
    
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className={ "service-card card text-center shadow"}>
            <div className="overflow">
                <img src={imageUrl} style={{backgroundImage: `url(${imageUrl})`}} alt="" className="card-img-top background-image"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{title.toUpperCase()}</h4>
                <p className="card-text text-secondary">{shortDesc}</p>
                {/* <div className="button" onClick={ () => history.push('book')}>Book Now</div> */}
                <Link onClick={scrollToTop} className="button" to='book'>Book Now</Link>
                {/* `${match.url}${linkUrl}` */}
            </div>
        </div>        
    )    
};

export default withRouter(Card);