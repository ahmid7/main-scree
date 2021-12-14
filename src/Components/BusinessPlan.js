import { useState } from 'react';

const BusinessPlan = () =>{
    const [plan, setPlan ] = useState(false);
    const testing = (e) =>{
        if(e.target.innerText === "MONTHLY"){
            setPlan(false);
        }else if(e.target.innerText ==="ANNUALLY"){
            setPlan(true);
        }
    }
    return(
        <section className="plan-section">
            <div className="section-width" id="pricing">
                <h2>
                The Perfect Fit for Every business
                </h2>
                <p className="p">Choose the plan that fits you best, we’ve got something for everyone</p>
                <div className="billing">
                    <p>Billing Type:</p>
                    <button className={`${plan ? 'color' : 'default-color'}`} onClick={testing}>Monthly</button>
                    <button className={`${plan ? 'default-color' : 'color'}`}  onClick={testing}>Annually</button>
                </div>
                <div className= {`${plan ? 'plan-type x' : 'plan-type y'}`}>
                    <div className="plan one">
                        <div className="plan-header">
                            <p>silver plan</p>
                            <p>FREE</p>
                            <p>New Accounts Starts Here</p>
                        </div> 
                        <div className="plan-content">
                            <p>2 Website</p>
                            <p>Unlimited products</p>
                            <p>1 image per product</p>
                            <p>Free customizable themes</p>
                            <p>Shipment tracking</p>
                            <p>Free hosting</p>
                            <p>500mb storage </p>
                        </div>
                    </div>

                    <div className="plan">
                        <div className="plan-header">
                            <p>Gold Plan</p>
                            <p>$19.99/Month</p>
                            <p>Per Month, Billed Monthly</p>
                        </div>
                        <div className="plan-content">
                            <p>15 Websites</p>
                            <p>Unlimited products</p>
                            <p>3 image per product</p>
                            <p>Free customizable themes</p>
                            <p>Shipment tracking</p>
                            <p>Free Hosting</p>
                            <p>SEO Features </p>
                            <p>10gb storage </p>
                            <p>Site Analytics</p>
                        </div>
                    </div>

                    <div className="plan">
                        <div className="plan-header">
                            <p>Platinum Plan</p>
                            <p>$39.99/Month</p>
                            <p>Per Month, Billed Monthly </p>
                        </div>
                        <div className="plan-content">
                            <p>100 Websites</p>
                            <p>Unlimited products</p>
                            <p>10 image per product</p>
                            <p>Free customizable themes</p>
                            <p>Shipment tracking</p>
                            <p>Free Hosting</p>
                            <p>SEO Features </p>
                            <p>100gb storage </p>
                            <p>Site Analytics</p>
                        </div>
                    </div>
                </div>
                <div className={`${plan ? 'plan-type y' : 'plan-type x'}`}>
                    <div className="plan one">
                        <div className="plan-header">
                            <p>silver plan</p>
                            <p>FREE</p>
                            <p>New Accounts Starts Here</p>
                        </div> 
                        <div className="plan-content">
                            <p>2 Website</p>
                            <p>Unlimited products</p>
                            <p>1 image per product</p>
                            <p>Free customizable themes</p>
                            <p>Shipment tracking</p>
                            <p>Free hosting</p>
                            <p>500mb storage </p>
                        </div>
                    </div>

                    <div className="plan">
                        <div className="plan-header">
                            <p>Gold Plan</p>
                            <p>$90.99/year</p>
                            <p>Per Month, Billed Annually </p>
                        </div>
                        <div className="plan-content">
                            <p>15 Websites</p>
                            <p>Unlimited products</p>
                            <p>3 image per product</p>
                            <p>Free customizable themes</p>
                            <p>Shipment tracking</p>
                            <p>Free Hosting</p>
                            <p>SEO Features </p>
                            <p>10gb storage </p>
                            <p>Site Analytics</p>
                        </div>
                    </div>

                    <div className="plan">
                        <div className="plan-header">
                            <p>Platinum Plan</p>
                            <p>$109.99/Month</p>
                            <p>Per Year, Billed Annually </p>
                        </div>
                        <div className="plan-content">
                            <p>100 Websites</p>
                            <p>Unlimited products</p>
                            <p>10 image per product</p>
                            <p>Free customizable themes</p>
                            <p>Shipment tracking</p>
                            <p>Free Hosting</p>
                            <p>SEO Features </p>
                            <p>100gb storage </p>
                            <p>Site Analytics</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default BusinessPlan;