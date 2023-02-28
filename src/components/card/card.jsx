import React, { Component, useState } from "react";
import './card.scss'

const Card = (props) => {
    const [toggle, setToggle] = useState(false);

    return (

        <div className="container">
            {
                toggle ?

                    <div className="back-front flip frame pointer" onClick={e => { setToggle(!toggle) }}>
                        <div className="content">
                            <div className="strip"> </div>
                            <div className="cvv-block"><div className="cvv-gradient"></div> <div className="cvv-text"> 123 </div> </div>
                            <div className="card-number"> <label> 7894 **** **** 3654 </label> </div>
                            <div className="validity"> <label >Valid Thru </label> <label className="validity-date"> &nbsp; 10/28 </label> </div>
                            <div className="logo-sm"></div>
                        </div>
                    </div>
                    :

                    <div className="front-face flip frame pointer" onClick={e => { setToggle(!toggle) }}>
                        <div className="header">
                            <div>
                                <label className="card-title"> CLASSIC</label>
                                <label className="card-title-subtext"> Cash back</label>
                            </div>
                            <label className="logo float-right"> </label>
                        </div>
                        <div className="chip">
                            <div className="chip-line"></div>
                            <div className="chip-line"></div>
                            <div className="chip-line"></div>
                            <div className="chip-line"></div>
                            <div className="chip-main"></div>
                        </div>


                        <label className="card-name"> JOHN DOE</label>
                        <div className="contactless-icon"> </div>
                        <div className="visa-logo"> </div>
                    </div>
            }
        </div>



    )

}

export default Card;