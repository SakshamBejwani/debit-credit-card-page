import React from 'react'
import Herologo from '../components/herologo'
function Home() {
  return (
    <div class="container-flex min-vh-100 bg-dark">
        <div class="container-flex">
            <div class="landing-container">
                <div class="hero-container">
                    <div class="container">
                        <div class="row my-5">
                            <Herologo />
                        </div>
                        <div class="row hero-row py-3">
                            <div class="col-5">
                                <div class="hero-text">
                                        Pay smartly and efficiently
                                </div>
                            </div>
                            <div class="col second-section">
                                <div class="row py-3 sub-text">
                                    Future is now. Manage your card finances <br/>transparently and easily with us.
                                </div>
                                <div class="row rainbow">
                                </div>
                            </div>
                            <div class="col button-group">
                                <div class="row">
                                    <button class="applyNowButton">
                                        <div class="mx-3">Apply Now</div>
                                        <svg width="30" height="10" viewBox="0 0 49 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M48.0607 13.0607C48.6464 12.4749 48.6464 11.5251 48.0607 10.9393L38.5147 1.3934C37.9289 0.807612 36.9792 0.807612 36.3934 1.3934C35.8076 1.97918 35.8076 2.92893 36.3934 3.51472L44.8787 12L36.3934 20.4853C35.8076 21.0711 35.8076 22.0208 36.3934 22.6066C36.9792 23.1924 37.9289 23.1924 38.5147 22.6066L48.0607 13.0607ZM0 13.5H47V10.5H0V13.5Z" fill="#FEFEFE"/>
                                            </svg>

                                    </button>
                                </div>
                                <div class="row">
                                    <button class="learnMoreButton">
                                    <div class="mx-3">Learn More</div>
                                    </button>
                                </div>
                            </div>
                                    
                        </div>
                    </div>
                    
                </div>
                <div class="picture-container">
                    2
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home