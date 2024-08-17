import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {

  useGSAP(()=>{
   gsap.to('#title',{opacity:1,y:0})
   gsap.to('.link',{opacity:1,y:0,duration:1,stagger:0.25})
  },[])
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 className="section-heading" id="title">Get the highlights.</h1>

          <div className="flex flex-wrap items-end gap-5">
          <p className="link">Watch the film
            <img src={watchImg} alt="watch icon" />
          </p>
          <p className="link">Watch the film
            <img src={rightImg} alt="right icon" />
          </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
      
    </section>
  )
}

export default Highlights
