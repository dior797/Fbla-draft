import '../pages/PageCss/About.css'
import AboutImg from '../homeless.avif'
import AboutImg2 from '../about2.avif'


const About = () => {
  return (
    <>
      <div className='titleAbt'>About Land-Locked</div>
      <div className='Welcome'>Welcome to Land-Locked! We are dedicated to providing affordable and stylish clothing, accessories, and home goods to our community. We aim to promote sustainability by giving new life to gently used items and reducing the amount of waste in landfills.</div>
      <div className='All'>
        <img src={AboutImg} className="Image1" alt="Image1"
          width="100%" height="auto"></img>
        <p className='text1'><b>Our mission</b> at Land-Locked Thrift Store is to provide high-quality, gently used clothing, household items, and furniture at affordable prices to our community. By doing so, we strive to be a resource for those in need, help reduce waste and promote sustainable living, and support local charities and non-profit organizations through donations and partnerships. We are committed to providing a welcoming and inclusive shopping experience for all, and fostering a culture of kindness and generosity in everything we do.
        </p>
        <p className='text1'><b>Our mission</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <img src={AboutImg2} className="Image1" alt='Image1' width="100%" height="auto"></img>
      </div>
      <div className='part2'>
        <div className='Our'>How are we diffrent?</div>
        <div className='OurSum'>We have a wide variety of items, including vintage, and designer finds, as well as everyday essentials. Our selection is constantly changing, so there's always something new to discover. We carefully inspect each item before putting it out for sale, so you can shop with confidence.
          <br />
          <br />
          In addition to our commitment to sustainability, we also strive to give back to our community. A portion of our profits goes towards supporting local charities and non-profit organizations.</div>
      </div>

    </>

  )
};


export default About;
