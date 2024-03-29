import { RiInstagramFill,RiDribbbleLine,RiTwitterFill,RiYoutubeFill} from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect,useRef } from 'react'; 

const Footer = () =>{
    gsap.registerPlugin(ScrollTrigger);
    const hnameref = useRef();
    useEffect(() => {
        gsap.to(hnameref.current, {
            scrollTrigger:{
                trigger: ".footer-flex",
                toggleActions:"play plause resume reset"
            },
            x:"+=40",
            duration:1.5,
            ease:"bounce",
            onComplete:returnBack
        });
        function returnBack(){
            gsap.to(hnameref.current,{
                x:"-=40",
                duration:1.5,
            })
        }
    })

    return(
    <footer>
        <section className="section-width footer-flex" id="footer">
            <div className="website-name">
                <h2>scree.</h2>
                <div ref={hnameref}>
                    
                </div>
            </div>
            <ul>
                <li><a href="#home">Products</a></li>
                <li><a href="#resource">Resources</a></li>
                <li><a href="#home">Hire an Expert</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#footer">About Us</a></li>
            </ul>
            <div className="hr-line">
            </div>
            <div className="last-line">
                <div className="copy-right">
                    <p>© 2021 Scree. All rights reserved</p>
                </div>
                <div className="social-media-icon">
                    <div className="media-icons-container">
                        <a href="#home"><RiInstagramFill className="media-icon"/></a>
                    </div>
                    <div className="media-icons-container">
                        <a href="#home"><RiDribbbleLine className="media-icon"/></a>
                    </div>
                    <div className="media-icons-container">
                        <a href="#home"><RiTwitterFill className="media-icon"/></a>
                    </div>
                    <div className="media-icons-container">
                        <a href="#home"><RiYoutubeFill className="media-icon"/></a>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    )
}
export default Footer;