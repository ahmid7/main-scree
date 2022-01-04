const MobileApp = () =>{
    return(
        <section className="mobile-app-section">
            <div className="section-width mobile-app">
                <div className ="app-container">
                    <div className="app-text" data-aos='fade-up' data-aos-duration="1500">
                        <h2>
                            Run Your Store from Anywhere 
                        </h2>
                        <p>
                        Manage your business on the go with the Scree Mobile App. Create products, process orders, and keep an eye on key stats in real-time.
                        </p>
                        <span className=""><a href="#home">Get The App <span>&#8594;</span></a></span>
                        <div className="link-app-container">
                            <button className="link-app"><a href="#home">Get The App <span>&#8594;</span></a></button>
                        </div>
                    </div>
                </div>
                <img className="app-image" src="/images/image 1.png" alt=""/>
            </div>
        </section>
    )
}


export default MobileApp;