import profilePic from './assets/Emmanuel-resized.jpg'
function Card() {
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture" className='card-image'></img>
            <h2 className='card-title'> Emmanuel Olaleye</h2>
            <p className='card-text'>Co-founder of THE PESO GROUP.<br/>I love to travel and explore new culture in my free time.</p>
        </div>
    );
}

export default Card
