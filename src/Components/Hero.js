import Hamburger from 'hamburger-react';
import { useState} from 'react';
// import { gsap } from "gsap";
const Hero = () => {
    // const box = useRef();
    // useEffect(() => {
    //     gsap.to(box.current, {x:40,duration:1.5, ease:"bounce",onComplete:getback});
    //     function getback(){
    //         gsap.to(box.current,{x:0,duration:1.5})
    //     }
    // })
    const [isOpen, setOpen] = useState(false);
    const [colorChange,setcolorChange] = useState(false);
    const changeNavBarColor = () =>{
        if(window.scrollY >=10){
            setcolorChange(true);
        }else{
            setcolorChange(false)
        }
    }
    window.addEventListener('scroll', changeNavBarColor);
    return (
        <div className="hero-bg">
            <header className={`${colorChange ? 'headerchangeColor' : 'headerdefaultcolor'}`}>
                <div className="hero-icon">
                    <h1 className = {`${isOpen ? 'show' : 'hide'}`}><a href="#home" >scree.</a></h1>
                    <div>
                    </div>
                </div>
                <ul className="sys-nav">
                    <li><a href="#Products" >Products</a></li>
                    <li><a href="#resources" >Resources</a></li>
                    <li><a href="#hire" >Hire an Expert</a></li>
                    <li><a href="#pricing" >Pricing</a></li>
                    <li><a href="#about" >About Us</a></li>
                </ul>
                <div className ="begin">
                    <button className="login"><a href="#login">Login</a></button>
                    <button className="get-started"><a href="Start">Get started</a></button>
                </div>
                <div className={`${isOpen ? 'mobile-nav block' : 'mobile-nav hidden'}`}>
                    <ul>
                        <li><a href="#Products" onClick={()=>{setOpen(!isOpen)}}>Products</a></li>
                        <li><a href="#resources" onClick={()=>{setOpen(!isOpen)}}>Resources</a></li>
                        <li><a href="#hire" onClick={()=>{setOpen(!isOpen)}}>Hire an Expert</a></li>
                        <li><a href="#pricing" onClick={()=>{setOpen(!isOpen)}}>Pricing</a></li>
                        <li><a href="#about" onClick={()=>{setOpen(!isOpen)}}>About Us</a></li>
                    </ul>
                    <div className ="button">
                        <button className="log-in"><a href="#login">Login</a></button>
                        <button className="getstarted"><a href="Start">Get started</a></button>
                    </div>
                </div>
                <div className="hamburger-container">
                    <Hamburger toggled={isOpen} toggle={setOpen}  size={16} color="white"/>
                </div>
            </header>
            <section className="section-width hero-content">
                <h2 data-aos='zoom-in' data-aos-duration="2000"> Start creating your very <br className="br-hide"/> own customizable <br/> website</h2>
                <button><a href="#home">create my store</a></button>
            </section>
        </div>
    )
}

export default Hero;