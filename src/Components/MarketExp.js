import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import {useEffect} from 'react';

const MarketExp = () =>{
<<<<<<< HEAD
=======
    gsap.registerPlugin(ScrollTrigger);
>>>>>>> eeb6f60cdd451efe397136416ec6e3bccd8ac886
    useEffect(()=>{
        gsap.fromTo(
            '.first-review',
            {
                x:-50
            },
            {
                scrollTrigger:{
<<<<<<< HEAD
                    toggleActions:"play plause resume reset",
                    trigger:'.customer-reviews',
=======
                    trigger:'.customer-reviews',
                    toggleActions:"play plause resume reset"
>>>>>>> eeb6f60cdd451efe397136416ec6e3bccd8ac886
                },
                x:0,
                duration:2,
                ease:"power4.out"
            }
        )
        gsap.fromTo(
            '.second-review',
            {
                x:+50
            },
            {
                scrollTrigger:{
                    trigger:'.second-review',
                    toggleActions:"play plause resume reset"
                },
                x:0,
                duration:2,
                ease:"power4.out"
            }
        )
        gsap.fromTo(
            '.third-review',
            {
                x:-50
            },
            {
                scrollTrigger:{
                    trigger:'.third-review',
                    toggleActions:"play plause resume reset"
                },
                x:0,
                duration:2,
                ease:"power4.out"
            }
        )
    },[]);
    return (
        <section className="Experience">
            <div className="section-width position-quote">
                <div className="exp-header">
                    <svg className="start-quote" width="218" height="160" viewBox="0 0 218 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M218 4.73753C185.348 20.7029 169.023 39.4619 169.023 61.0152C182.94 62.6117 194.448 68.266 203.548 77.9783C212.647 87.6906 217.197 98.9327 217.197 111.705C217.197 125.276 212.781 136.717 203.949 146.03C195.117 155.344 184.011 160 170.629 160C155.641 160 142.661 153.947 131.688 141.839C120.715 129.732 115.229 115.031 115.229 97.7354C115.229 45.8479 144.4 5.26985 202.745 -24L218 4.73753ZM102.771 4.73753C69.8523 20.7029 53.393 39.4619 53.393 61.0152C67.5776 62.6117 79.2196 68.266 88.3192 77.9783C97.4188 87.6906 101.969 98.9327 101.969 111.705C101.969 125.276 97.4857 136.717 88.5199 146.03C79.5541 155.344 68.3805 160 54.9988 160C40.0112 160 27.098 153.947 16.2588 141.839C5.41953 129.732 0 115.031 0 97.7354C0 45.8479 29.038 5.26985 87.1148 -24L102.771 4.73753Z" fill="#FA5020"/>
                    </svg>
                    <h2>Making Entrepreneurs Happy,<br/> Giving the Best Marketing Experiece</h2>
                </div>
                <div className="customer-reviews">
<<<<<<< HEAD
                    <div className="review first-review" >
=======
                    <div className="review first-review">
>>>>>>> eeb6f60cdd451efe397136416ec6e3bccd8ac886
                        <div className="reviewers">
                            <img src="./images/unsplash_d1UPkiFd04A.png" alt=""></img>
                            <p>Kristaps Porzingis</p>
                        </div>
<<<<<<< HEAD
                        <div className="reviewers-text">


=======
                        <div className="reviewers-text trigger-scroll">
>>>>>>> eeb6f60cdd451efe397136416ec6e3bccd8ac886
                            <svg className="quote-svg" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9298 2.18655C13.5439 3.40131 12.351 4.82863 12.351 6.46855C13.3679 6.59002 14.2088 7.02024 14.8738 7.75922C15.5387 8.4982 15.8712 9.35357 15.8712 10.3254C15.8712 11.3579 15.5485 12.2285 14.9031 12.9371C14.2577 13.6457 13.4461 14 12.4683 14C11.3731 14 10.4246 13.5394 9.62279 12.6182C8.82096 11.697 8.42005 10.5785 8.42005 9.26247C8.42005 5.31451 10.5517 2.22705 14.8151 0L15.9298 2.18655ZM7.50978 2.18655C5.10429 3.40131 3.90156 4.82863 3.90156 6.46855C4.93808 6.59002 5.78878 7.02024 6.45372 7.75922C7.11865 8.4982 7.45111 9.35357 7.45111 10.3254C7.45111 11.3579 7.12354 12.2285 6.46838 12.9371C5.81323 13.6457 4.99675 14 4.0189 14C2.92372 14 1.98012 13.5394 1.18807 12.6182C0.39602 11.697 0 10.5785 0 9.26247C0 5.31451 2.12188 2.22705 6.36571 0L7.50978 2.18655Z" fill="#3D1E2C"/>
                            </svg>
                            <p>Blandit nunc lectus nisl vitae non amet. Amet bibendum ultricies sed cursus quis leo ut tortor. Turpis namaliquam, vulputate id lobortis.</p>
                        </div>
                    </div>
<<<<<<< HEAD
                    <div className="review second-review">
=======
                    <div className="review second-review" >
>>>>>>> eeb6f60cdd451efe397136416ec6e3bccd8ac886
                        <div className="reviewers">
                            <img src="./images/unsplash_2EGNqazbAMk.png" alt=""></img>
                            <p>Samuel Osas</p>
                        </div>
                        <div className="reviewers-text">
                            <svg className="quote-svg" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9298 2.18655C13.5439 3.40131 12.351 4.82863 12.351 6.46855C13.3679 6.59002 14.2088 7.02024 14.8738 7.75922C15.5387 8.4982 15.8712 9.35357 15.8712 10.3254C15.8712 11.3579 15.5485 12.2285 14.9031 12.9371C14.2577 13.6457 13.4461 14 12.4683 14C11.3731 14 10.4246 13.5394 9.62279 12.6182C8.82096 11.697 8.42005 10.5785 8.42005 9.26247C8.42005 5.31451 10.5517 2.22705 14.8151 0L15.9298 2.18655ZM7.50978 2.18655C5.10429 3.40131 3.90156 4.82863 3.90156 6.46855C4.93808 6.59002 5.78878 7.02024 6.45372 7.75922C7.11865 8.4982 7.45111 9.35357 7.45111 10.3254C7.45111 11.3579 7.12354 12.2285 6.46838 12.9371C5.81323 13.6457 4.99675 14 4.0189 14C2.92372 14 1.98012 13.5394 1.18807 12.6182C0.39602 11.697 0 10.5785 0 9.26247C0 5.31451 2.12188 2.22705 6.36571 0L7.50978 2.18655Z" fill="#3D1E2C"/>
                            </svg>
                            <p>Sit libero, purus eu tellus ipsum commodo. Sed integer tempus risus nec convallis eu commodo posuere ipsum. facilisis risus, integer tempor quis fermentum.</p>
                        </div>
                    </div>
<<<<<<< HEAD
                    <div className="review" >
=======
                    <div className="review third-review">
>>>>>>> eeb6f60cdd451efe397136416ec6e3bccd8ac886
                        <div className="reviewers">
                            <img src="./images/unsplash_W7b3eDUb_2I.png" alt=""></img>
                            <p>Sarah <br className="review-break"/> Alexis</p>
                        </div>
                        <div className="reviewers-text">
                            <svg className="quote-svg" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9298 2.18655C13.5439 3.40131 12.351 4.82863 12.351 6.46855C13.3679 6.59002 14.2088 7.02024 14.8738 7.75922C15.5387 8.4982 15.8712 9.35357 15.8712 10.3254C15.8712 11.3579 15.5485 12.2285 14.9031 12.9371C14.2577 13.6457 13.4461 14 12.4683 14C11.3731 14 10.4246 13.5394 9.62279 12.6182C8.82096 11.697 8.42005 10.5785 8.42005 9.26247C8.42005 5.31451 10.5517 2.22705 14.8151 0L15.9298 2.18655ZM7.50978 2.18655C5.10429 3.40131 3.90156 4.82863 3.90156 6.46855C4.93808 6.59002 5.78878 7.02024 6.45372 7.75922C7.11865 8.4982 7.45111 9.35357 7.45111 10.3254C7.45111 11.3579 7.12354 12.2285 6.46838 12.9371C5.81323 13.6457 4.99675 14 4.0189 14C2.92372 14 1.98012 13.5394 1.18807 12.6182C0.39602 11.697 0 10.5785 0 9.26247C0 5.31451 2.12188 2.22705 6.36571 0L7.50978 2.18655Z" fill="#3D1E2C"/>
                            </svg>
                            <p>Proin praesent est, velit est iaculis sit eu consectetur.Turpis metus suspendisse nunc turpis congue velit eget.Ut consequat non netus suspendisse a feugiat.</p>
                        </div>
                    </div>
                </div>
                <svg className="ending-quote" width="218" height="159" viewBox="0 0 218 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M0 155.262C32.6515 139.297 48.977 120.538 48.977 98.9848C35.06 97.3883 23.5518 91.734 14.4522 82.0217C5.35263 72.3094 0.802902 61.0673 0.802902 48.295C0.802902 34.7244 5.21881 23.2828 14.0508 13.9696C22.8828 4.65649 33.9894 0 47.3712 0C62.3588 0 75.3389 6.05345 86.3119 18.1605C97.285 30.2676 102.771 44.9688 102.771 62.2646C102.771 114.152 73.5996 154.73 15.2551 184L0 155.262ZM115.229 155.262C148.148 139.297 164.607 120.538 164.607 98.9848C150.422 97.3883 138.78 91.734 129.681 82.0217C120.581 72.3094 116.031 61.0673 116.031 48.295C116.031 34.7244 120.514 23.2828 129.48 13.9696C138.446 4.65649 149.619 0 163.001 0C177.989 0 190.902 6.05345 201.741 18.1605C212.58 30.2676 218 44.9688 218 62.2646C218 114.152 188.962 154.73 130.885 184L115.229 155.262Z" fill="#FA5020"/>
                </svg>
            </div>
        </section>
    )
}

export default MarketExp;