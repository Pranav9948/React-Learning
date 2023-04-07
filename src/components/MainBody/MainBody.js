import React from 'react'
import './MainBody.css'
import Cards from '../Cards/Cards'


function MainBody() {


    let  touristSpots= [
        {
          "names": "Eiffel Tower",
          "image": "https://img.freepik.com/free-photo/eiffel-tower-paris-with-gorgeous-colors-autumn_268835-828.jpg?size=626&ext=jpg&ga=GA1.2.730194809.1679567299&semt=ais",
          "description": "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower."
        },
        {
          "names": "Statue of Liberty",
          "image": "https://img.freepik.com/free-photo/statue-liberty-liberty-island-new-york_268835-780.jpg?size=626&ext=jpg&ga=GA1.2.730194809.1679567299&semt=ais",
          "description": "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City, in the United States. The statue, designed by Frédéric Auguste Bartholdi, was a gift to the United States from the people of France."
        },
        {
          "names": "Great Wall of China",
          "image": "https://img.freepik.com/free-photo/travelling-china_8327-75.jpg?size=626&ext=jpg&ga=GA1.2.730194809.1679567299&semt=ais",
          "description": "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe."
        },
        {
          "names": "Machu Picchu",
          "image": "https://img.freepik.com/free-photo/aerial-shot-beautiful-village-by-mountain-captured-machu-picchu-peru_181624-14674.jpg?size=626&ext=jpg&ga=GA1.1.730194809.1679567299&semt=ais",
          "description": "Machu Picchu is a 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a 2,430-metre mountain ridge. It is located in the Cusco Region, Urubamba Province, Machupicchu District, above the Sacred Valley, which is 80 kilometres northwest of Cuzco."
        }
      ]

  return (

    <div className='mainBody'>

<div class="container text-center">
  <div class="row  pt-5">

   
  

        

        {

            touristSpots.map((spot)=>{


                return (



                  <div class="col md-3">
     
                <Cards
                names={spot.names}
                image={spot.image}
                description={spot.description} 

                
                
                />
            

     
                  </div>

            

                )

            })
        }

</div>
</div>

  
      
    </div>

  )
}

export default MainBody
