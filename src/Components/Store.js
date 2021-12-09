const Store = () =>{
    return(
        <section className="store-section">
            <div className =  "section-width">
                <h2 className="store-header">
                    Get your store up and running in little  or no time
                </h2>
                <div className="store-advantages">
                    <div className="advantage first-one" data-aos="fade-right" data-aos-duration="1500">
                        <svg className="first-svg" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.88 1.4C12.2555 0.960938 12.7217 0.608443 13.2465 0.366765C13.7713 0.125086 14.3422 -3.80026e-05 14.92 8.65794e-09H49.08C49.6578 -3.80026e-05 50.2287 0.125086 50.7535 0.366765C51.2783 0.608443 51.7445 0.960938 52.12 1.4L62.556 13.576C63.4878 14.6633 64 16.048 64 17.48V18.5C64.0002 20.4799 63.3818 22.4104 62.2313 24.0217C61.0807 25.633 59.4555 26.8445 57.5827 27.487C55.7099 28.1294 53.6832 28.1707 51.7859 27.6051C49.8885 27.0394 48.2152 25.8951 47 24.332C46.1126 25.4751 44.9753 26.3999 43.6753 27.0357C42.3754 27.6715 40.9471 28.0013 39.5 28C38.0528 28.0016 36.6245 27.6719 35.3245 27.0361C34.0244 26.4003 32.8872 25.4753 32 24.332C31.1128 25.4753 29.9756 26.4003 28.6755 27.0361C27.3755 27.6719 25.9472 28.0016 24.5 28C23.0528 28.0016 21.6245 27.6719 20.3245 27.0361C19.0244 26.4003 17.8872 25.4753 17 24.332C15.7848 25.8951 14.1115 27.0394 12.2141 27.6051C10.3168 28.1707 8.29006 28.1294 6.4173 27.487C4.54453 26.8445 2.91929 25.633 1.76873 24.0217C0.618167 22.4104 -0.000218394 20.4799 5.78582e-08 18.5V17.48C5.04301e-05 16.048 0.512226 14.6633 1.444 13.576L11.884 1.396L11.88 1.4ZM19 18.5C19 19.9587 19.5795 21.3576 20.6109 22.3891C21.6424 23.4205 23.0413 24 24.5 24C25.9587 24 27.3576 23.4205 28.3891 22.3891C29.4205 21.3576 30 19.9587 30 18.5C30 17.9696 30.2107 17.4609 30.5858 17.0858C30.9609 16.7107 31.4696 16.5 32 16.5C32.5304 16.5 33.0391 16.7107 33.4142 17.0858C33.7893 17.4609 34 17.9696 34 18.5C34 19.9587 34.5795 21.3576 35.6109 22.3891C36.6424 23.4205 38.0413 24 39.5 24C40.9587 24 42.3576 23.4205 43.3891 22.3891C44.4205 21.3576 45 19.9587 45 18.5C45 17.9696 45.2107 17.4609 45.5858 17.0858C45.9609 16.7107 46.4696 16.5 47 16.5C47.5304 16.5 48.0391 16.7107 48.4142 17.0858C48.7893 17.4609 49 17.9696 49 18.5C49 19.9587 49.5795 21.3576 50.6109 22.3891C51.6424 23.4205 53.0413 24 54.5 24C55.9587 24 57.3576 23.4205 58.3891 22.3891C59.4205 21.3576 60 19.9587 60 18.5V17.48C60 17.0033 59.8298 16.5423 59.52 16.18L49.08 4H14.92L4.48 16.18C4.17019 16.5423 3.99996 17.0033 4 17.48V18.5C4 19.9587 4.57946 21.3576 5.61091 22.3891C6.64236 23.4205 8.04131 24 9.5 24C10.9587 24 12.3576 23.4205 13.3891 22.3891C14.4205 21.3576 15 19.9587 15 18.5C15 17.9696 15.2107 17.4609 15.5858 17.0858C15.9609 16.7107 16.4696 16.5 17 16.5C17.5304 16.5 18.0391 16.7107 18.4142 17.0858C18.7893 17.4609 19 17.9696 19 18.5ZM6 30C6.53043 30 7.03914 30.2107 7.41421 30.5858C7.78929 30.9609 8 31.4696 8 32V56H12V36C12 34.9391 12.4214 33.9217 13.1716 33.1716C13.9217 32.4214 14.9391 32 16 32H28C29.0609 32 30.0783 32.4214 30.8284 33.1716C31.5786 33.9217 32 34.9391 32 36V56H56V32C56 31.4696 56.2107 30.9609 56.5858 30.5858C56.9609 30.2107 57.4696 30 58 30C58.5304 30 59.0391 30.2107 59.4142 30.5858C59.7893 30.9609 60 31.4696 60 32V56H62C62.5304 56 63.0391 56.2107 63.4142 56.5858C63.7893 56.9609 64 57.4696 64 58C64 58.5304 63.7893 59.0391 63.4142 59.4142C63.0391 59.7893 62.5304 60 62 60H2C1.46957 60 0.960859 59.7893 0.585787 59.4142C0.210714 59.0391 5.78582e-08 58.5304 5.78582e-08 58C5.78582e-08 57.4696 0.210714 56.9609 0.585787 56.5858C0.960859 56.2107 1.46957 56 2 56H4V32C4 31.4696 4.21071 30.9609 4.58579 30.5858C4.96086 30.2107 5.46957 30 6 30ZM16 56H28V36H16V56ZM36 36C36 34.9391 36.4214 33.9217 37.1716 33.1716C37.9217 32.4214 38.9391 32 40 32H48C49.0609 32 50.0783 32.4214 50.8284 33.1716C51.5786 33.9217 52 34.9391 52 36V48C52 49.0609 51.5786 50.0783 50.8284 50.8284C50.0783 51.5786 49.0609 52 48 52H40C38.9391 52 37.9217 51.5786 37.1716 50.8284C36.4214 50.0783 36 49.0609 36 48V36ZM48 36H40V48H48V36Z" fill="#FA5020"/>
                        </svg>

                        <div>
                            <h4>Start easily</h4>
                            <p>Create a store in a couple of clicks. Sign up, add your products, customize your store and you're live.</p>
                        </div>
                    </div>
                    <div className ="advantage" data-aos='zoom-in' data-aos-duration="1500">
                        <svg className="second-svg" viewBox="0 -20 56 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36 0V4H49.172L32 21.172L23.414 12.586C23.0389 12.2111 22.5303 12.0004 22 12.0004C21.4697 12.0004 20.9611 12.2111 20.586 12.586L0 33.172L2.828 36L22 16.828L30.586 25.414C30.9611 25.7889 31.4697 25.9996 32 25.9996C32.5303 25.9996 33.0389 25.7889 33.414 25.414L52 6.828V20H56V0H36Z" fill="#FA5020"/>
                        </svg>
                        <div>
                            <h4>Grow big</h4>
                            <p>Use built-in marketing features to grow your sales and business. Whether you need discounts, product up-selling, or email service, Sellfy has you covered.</p>
                        </div>
                    </div>
                    <div className="advantage third" data-aos="fade-left" data-aos-duration="1500">
                        <svg className="third-svg" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M52.0933 25.4266L28.5466 1.87998C27.5599 0.893313 26.1999 0.333313 24.7866 0.333313H5.66659C2.73325 0.333313 0.333252 2.73331 0.333252 5.66665V24.7866C0.333252 26.2 0.893252 27.56 1.90659 28.5466L25.4533 52.0933C27.5333 54.1733 30.9199 54.1733 32.9999 52.0933L52.1199 32.9733C54.1999 30.8933 54.1999 27.5333 52.0933 25.4266ZM29.2133 48.3333L5.66659 24.7866V5.66665H24.7866L48.3333 29.2133L29.2133 48.3333Z" fill="#FA5020"/>
                        </svg>

                        <div className="third-svg-text">
                            <h4>Sell anywhere, everywhere</h4>
                            <p>Reach your audience and sell directly on social media, your own website or anywhere else with a custom storefront.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Store;