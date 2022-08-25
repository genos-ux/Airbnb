import Card from './Card'
import img from './Airbnb Experiences/image 12.png'
import pic from './Airbnb Experiences/wedding-photography 1.png'
import Pic from './Airbnb Experiences/mountain-bike 1.png'



export default function Cards(){



    return(

      <div className='gallery'>
          
        <div className="first-img">
          <h4>SOLD OUT</h4>
          <Card
        
          link = {img}
          rating = "5.0"
          review_count = "6"
          title = "Life lessons with Katie Zaferes"
          cost = "$136"
        
          />
        </div>

        <div className="diff">

          <h4 id='line'>ONLINE</h4>
          
          <Card
          link = {pic}
          rating = "5.0"
          review_count = "30"
          title = "Learn wedding photography"
          cost = "$125"
          />
        </div>

        <div className="dat">

          <h4 className='dot'>.</h4>
          <Card
          
          className = "date"
          link = {Pic}
          rating = "4.8"
          review_count = "2"
          title = "Group Mountain Biking"
          cost = "$50"
          />
        </div>
      </div>
    )

    



}



