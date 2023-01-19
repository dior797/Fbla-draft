import './PageCss/Home.css'
import Vintage from '../thriftstore.jpg'
  const Home = () => {
    return(
      <>
      <div className='Home-all'>
        <img src={Vintage}  id='log' width='100%' height="auto" alt='Clothes'></img>
        <div className='titlediv'>
        <p className='title'><b>Shop Smart, Shop Thrift!</b></p>
        <p className='desc'><b>Unlock your style at Land-Locked Thrift Shop</b></p>
        <a href="./shop"><button className='titlebut'>Explore</button></a>
        </div>
        </div>
      </>
    )
  };
  
  export default Home;