import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';



const UserDetailPage = () => {
    const location = useLocation();
    let navigate11 = useNavigate();


    console.log(location.state);

    const getEachPublicUserDetail = (eachone) => {
        // console.log(navigate11);
        console.log(eachone);
 
        navigate11("/eachPublicUserDetailPage", { state: eachone });
    }



    return (
        <div>
        <img   src={location.state.placeImageSrc}
            style={{
                width: "720px",
                height: "600px"
            }}
        >
        </img>
        <br></br>
        {location.state.username}
        <br></br>
        {/* <br></br><br>
        </br><br></br><br></br> */}
  
        {location.state.addrposition}
        <br></br>
        <button>공인 추가</button>
        {/* <br></br><br></br><br></br><br></br> */}
        <br></br><br></br>

        <div
            style={{
                display: "flex"
            }}
        >
            <div
                style={{
                    width: "450px",
                }}
            >
                <br></br>
            </div>
            <div
                style={{
                    width: "450px",
                }}
            >
                {location.state.publicPeapleInThisPlace.map(function (item) {
                    return (
                        <div  
                            onClick={() => {
                                getEachPublicUserDetail(item);
                            }}
                            style={{
                                border: "solid"
                            }}
                        >
                            <div   
                                style={{
                                    display: "flex",
                                    border: "solid"
                                }}
                            >
                                <img  src={item.selfImageSrc}

                                    style={{
                                        width: "150px",
                                        height: "150px"
                                    }}
                                >
                                </img>
                                <div>
                                    {item.selfName}
                                    <br></br>
                                    {item.selfSocialPosition}
                                    <br></br>
                                    <div
                                        style={{
                                            display: "flex",
                                            backgroundColor: "blue"
                                        }}
                                    >
                                        <div>
                                            <div
                                                style={{
                                                color: "white"
                                                }}
                                            >
                                                좋아요
                                            </div>
                                            <div
                                                style={{
                                                    color: "white"
                                                }}
                                            >
                                                {item.likerCount}명
                                            </div>
                                        </div>
                                        <div>
                                            <div
                                                style={{
                                                    color: "white"
                                                }}
                                            >
                                                싫어요
                                            </div>
                                            <div
                                                style={{
                                                    color: "white"
                                                }}
                                            >
                                                {item.dislikerCount}명
                                            </div>
                                        </div>
                                        <div>
                                            <div
                                                style={{
                                                    color: "white"
                                                }}
                                            >
                                                기록
                                            </div>
                                            <div
                                                style={{
                                                    color: "white"
                                                }}
                                            >
                                                {item.selfActivityHistory.length}개
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    )
                })}
            </div>


            <div
                style={{
                    width: "450px",
                }}
            >
                <br></br>
            </div>
        </div>


        </div>
    );
};

export default UserDetailPage;