"use client"
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Image from "next/image";

type Props = {};

function AboutPage({ }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <section>
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-6">
                                <h6 className="letter-space-4 text-gray-darkgray text-uppercase mt-0 mb-0">
                                    All About
                                </h6>
                                <h2 className="text-uppercase font-weight-600 mt-0 font-28 line-bottom">
                                    The World’s Best Education in Our University
                                </h2>
                                <h4 className="text-theme-colored">
                                    Lorem ipsum dolor sit amet soluta saepe odit error, maxime
                                    praesentium sunt udiandae!
                                </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                                    atque officiis maxime suscipit expedita obcaecati nulla in ducimus
                                    iure quos quam recusandae dolor quas et perspiciatis voluptatum
                                    accusantium delectus nisi reprehenderit, eveniet fuga modi pariatur,
                                    eius vero. Ea vitae maiores.
                                </p>
                                <a
                                    className="btn btn-theme-colored btn-flat btn-lg mt-10 mb-sm-30"
                                    href="#"
                                >
                                    Know More →
                                </a>
                            </div>

                            <div className="col-md-6">
                                <div className="video-container">
                                    <Image
                                        src="/frontend/images/about/5.jpg"
                                        width={300}
                                        height={300}
                                        alt="About us"
                                        className="img-responsive img-fullwidth cursor-pointer"
                                        onClick={openModal}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
            {/* Modal Video */}
            <ModalVideo
                channel="youtube"
                isOpen={isOpen}
                videoId="pW1uVUg5wXM"
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}

export default AboutPage;