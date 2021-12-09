import { RiInstagramFill,RiDribbbleLine,RiTwitterFill,RiYoutubeFill} from "react-icons/ri";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect} from 'react'; 
// useRef 


const Footer = () =>{
    // gsap.registerPlugin(ScrollTrigger);
    // const hnameref = useRef();
    // useEffect(() => {
    //     gsap.to(hnameref.current, {
    //         scrollTrigger:{
    //             trigger: ".footer-flex",
    //             toggleActions:"play plause resume reset"
    //         },
    //         x:"+=40",
    //         duration:1.5,
    //         ease:"bounce",
    //         onComplete:returnBack
    //     });
    //     function returnBack(){
    //         gsap.to(hnameref.current,{
    //             x:"-=40",
    //             duration:1.5,
    //         })
    //     }
    // })

    return(
    <footer>
        <section className="section-width footer-flex">
            <div className="website-name">
                <h2>scree.</h2>
                <div>
                    
                </div>
            </div>
            <ul>
                <li><a href="#home">Products</a></li>
                <li><a href="#home">Resources</a></li>
                <li><a href="#home">Hire an Expert</a></li>
                <li><a href="#home">Pricing</a></li>
                <li><a href="#home">About Us</a></li>
            </ul>
            <div className="hr-line">
            </div>
            <div className="last-line">
                <div className="copy-right">
                    <p>© 2021 Scree. All rights reserved</p>
                </div>
                <div className="social-media-icon">
                    <div className="media-icons-container">
                        <RiInstagramFill className="media-icon"/>
                    </div>
                    <div className="media-icons-container">
                        <RiDribbbleLine className="media-icon"/>
                    </div>
                    <div className="media-icons-container">
                        <RiTwitterFill className="media-icon"/>
                    </div>
                    <div className="media-icons-container">
                        <RiYoutubeFill className="media-icon"/>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    )
}
export default Footer;