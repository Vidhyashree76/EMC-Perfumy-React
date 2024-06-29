
import one from "../assets/Images/one.jpg"
import two from "../assets/Images/two.jpg"
import three from "../assets/Images/three.jpg"



function Products(){
    return(
      <div class="products">
            <div class="box">
                        <img src={one}></img>
                        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
            </div>
            
            <div class="box">
                <img src={two}></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div class="box">
                <img src={three}></img>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>

            </div>
    )
  }

  export default Products