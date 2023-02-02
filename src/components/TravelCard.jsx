import React from "react";

export default function TravelCard(info) {



    return (

        <section className=" flex-col ">
            <div className="flex gap-x-7 justify-center items-center mb-14">
                <img src={"/images/" + info.image} alt={info.title} className=" w-img-width h-img-height rounded-xl"/>
                <div className="flex-col h-full">
                    <div className=" flex items-center">
                        <img src="/images/location.png" alt="location" className=" w-5" />
                        <h3 className=" text-xl text-country-dark-0 font-normal tracking-wide pl-0.5 pr-4">{info.location}</h3>
                        <a href={info.mapLink} className="text-link-color-0 underline">View on Google Maps</a>
                    </div>
                    <div>
                        <h1 className=" text-country-font-size font-bold text-country-dark-0 ">{info.title}</h1>
                        <h3 className=" font-bold text-lg mt-margin-top-date mb-margin-bot-date">{info.stdate} - {info.endate}</h3>
                        <p className="  font-medium leading-para-height w-para-width">
                            {info.desc}
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );

}