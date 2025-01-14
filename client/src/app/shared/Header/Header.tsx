import React from 'react'
import Image from 'next/image'
import UpcomingCountdownTimer from '@/CoundownTimer/UpcomingCoundownTimer'
import Navbar from './Navbar'

function Header() {
    return (
        <header id="header" className="header">
            <div className="header-top bg-theme-color-2 sm-text-center p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="widget no-border m-0">
                                <ul className="list-inline font-13 sm-text-center mt-5">
                                    <li>
                                        <a className="text-white" href="faq">
                                            FAQ
                                        </a>
                                    </li>
                                    <li className="text-white">|</li>
                                    <li>
                                        <a className="text-white" href="/privacy">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className="text-white">|</li>
                                    <li>
                                        <a className="text-white" href="/terms">
                                            Terms and Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">

                            <div className="widget no-border m-0 mr-15 pull-right flip sm-pull-none sm-text-center">
                                <ul className="styled-icons icon-circled icon-sm pull-right flip sm-pull-none sm-text-center mt-sm-15">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook text-white" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter text-white" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-google-plus text-white" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-instagram text-white" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin text-white" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-middle p-0 bg-lightest xs-text-center">
                <div className="container pt-0 pb-0">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-5">
                            <div className="widget no-border m-0">
                                <a
                                    className="menuzord-brand pull-left flip xs-pull-center mb-15"
                                    href="/"
                                >
                                    IREAD
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <div className="widget no-border pull-right sm-pull-none sm-text-center mt-10 mb-10 m-0">
                                <ul className="list-inline">
                                    <li>
                                        <i className="fa fa-phone-square text-theme-colored font-36 mt-5 sm-display-block" />
                                    </li>
                                    <li>
                                        <p className="font-12 text-gray text-uppercase">
                                            Call us today!
                                        </p>
                                        <h5 className="font-14 m-0"> +(012) 345 6789</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-3">
                            <div className="widget no-border pull-right sm-pull-none sm-text-center mt-10 mb-10 m-0">
                                <ul className="list-inline">
                                    <li>
                                        <i className="fa fa-clock-o text-theme-colored font-36 mt-5 sm-display-block" />
                                    </li>
                                    <li>
                                        <p className="font-12 text-gray text-uppercase">
                                            Upcoming Event!
                                        </p>
                                        <UpcomingCountdownTimer offerTill='2025-01-25T23:59:59'/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar/>
        </header>

    )
}

export default Header