import React from 'react'
import vg from "../assets/2.webp"
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} 
    from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>TechNinja</h1>
        <p>Solutions to all your problems</p>
      </main>
    </div>

    <div className="home2">
        <img src={vg} alt="" />
        <div>
            <p>
                We are your one and only solution to the teach problems your facs every day. We are leading tech company whose aim is to increase the problem solving ability in children.
            </p>
        </div>
    </div>
    <div className="home3" id='about'>
        <div>
            <h1>Who we Are</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, debitis facere. Est minima explicabo, inventore quas delectus veritatis. Nam repellat laboriosam consequatur quis velit, nobis culpa dolorum quo facere commodi eum, nisi quaerat? Nisi quia, ipsa sint animi eum saepe natus praesentium. Accusantium saepe inventore hic fugit. Id, placeat quo.</p>

        </div>
    </div>
    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay:"0.3s"
                }}>

                    <AiFillGoogleCircle/>
                    <p>Google</p>

                </div>
                <div style={{
                    animationDelay:"0.5s"
                }}>

                    <AiFillAmazonCircle/>
                    <p>Amazon</p>

                </div>
                <div style={{
                    animationDelay:"0.7s"
                }}>

                    <AiFillYoutube/>
                    <p>Youtube</p>

                </div>
                <div style={{
                    animationDelay:"1s"
                }}>

                    <AiFillInstagram/>
                    <p>Instagram</p>

                </div>
                
            </article>
        </div>
    </div>
    </>
  )
}

export default Home
