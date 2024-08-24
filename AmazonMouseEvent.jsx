
import '../mouseEvents/AmazonMouseEvent.css'
import { useEffect, useState } from "react"
import React  from "react";

export function AmazonCart()
{
    const[images]=useState(["Iphone1.png","Iphone2.png","Iphone3.png","Iphone4.png","Iphone5.png"])

    const[getSelectedImg,selectedImg]=useState("Iphone1.png")

    const[getDataAboutModel]=useState(["15.40 cm (6.1-inch) Super Retina XDR display",
                                      "Cinematic mode now in 4K Dolby Vision up to 30 fps",
                                      "Action mode for smooth, steady, handheld videos",
                                      "Advanced camera system for better photos in any light",
                                      "All-day battery life and up to 20 hours of video playback"
                                    ])

    const[termsCondition]=useState([
                                     {term:"Brand",defination:"Apple"},
                                     {term:"Operating System",defination:"iOS"},
                                     {term:"Memory Storage Capacity",defination:"128 GB"},
                                     {term:"Screen Size",defination:"6.1 Inches"},
                                     {term:"Resolution",defination:"4k"}
                                 ])

    function mouseOverFunction(e)
    {
        selectedImg(e.target.src);
    }

    return(
        <> 
         <header className="bg-dark rounded-1 p-2 mx-1">
            <h2 className="text-center text-light">Amazon</h2>
         </header> 
         <section className="row">
            <nav className="col-2">
                {
                   images.map(img=>
                        <div className="m-2 p-1 d-flex justify-content-center" key={img}>
                            <img src={img} width={80} onMouseOver={mouseOverFunction}/>
                        </div>
                        )
                }       
            </nav>
            <main className="col-6 my-3 bg-light" style={{height:"550px"}}>
                    <img src={getSelectedImg}  width={400} className="mt-4"/>
            </main>
            <div className="col-4 my-2 p-3">
                <h3 className='m-3'>Apple iPhone 14 (128 GB) - Blue</h3>
                <p className="m-3"><span className="bi bi-star-fill text-warning"></span>4.5 [75900]</p>
                <h3 className='m-3'><span className="text-danger">-22%</span> ₹62,600</h3>
                <div className='p-0 ms-3'>
                    <ul className='d-block w-100 p-0 '>
                        {
                            getDataAboutModel.map(value=>
                                <li key={value} className='w-100 text-start bg-white '>{value}</li>
                            )
                        }
                    </ul>
                </div>
                <div className="m-3">
                    <dl>
                        {
                             termsCondition.map(value=>
                                <React.Fragment key={value.defination}>
                                    <dt className='w-50'>{value.term}</dt>
                                    <dd className='w-50'>{value.defination}</dd>
                                </React.Fragment>
                            )
                            
                        }
                    </dl>
                </div>
            </div>
         </section>

        </>
    )
}