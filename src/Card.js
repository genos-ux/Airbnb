import './Airbnb Experiences/image 12.png' 
import img from './Airbnb Experiences/Star 1-1.png'



export default function Card(props){
    return (
        <div className='swim'>
            
            <img src={props.link} alt ="a swimmer" className='img'/>
            <p><img src={img} alt="a star" className='star' /> {props.rating} <span className='mini'> ({props.review_count}) · USA</span></p>
            <p>{props.title}</p>

            <p><h4 className='cost'>From {props.cost}</h4> / person</p>

        </div>
    )

}