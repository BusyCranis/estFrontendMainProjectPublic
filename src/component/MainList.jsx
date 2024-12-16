import React from "react";
import styles from "./MainList.module.css";
import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

export default function MainList() {
  const [mainItemList, setMainItemList] = useState([
    {
      id: "0001",
      author: "",
      title: "",
      content: "",
      uploadedTime: "",
      imageList: [
        {
          id: "image0001",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0002",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0003",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0004",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0005",
          src: "/assetss/upload-file.png"
        },
      ],
      commentList: [],
      commentCount: 0,
      favoriteCount: 0,
      userInMention: "",
    },
    {
      id: "0002",
      author: "",
      title: "",
      content: "",
      uploadedTime: "",
      imageList: [
        {
          id: "image0001",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0002",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0003",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0004",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0005",
          src: "/assetss/upload-file.png"
        },
      ],
      commentList: [],
      commentCount: 0,
      favoriteCount: 0,
      userInMention: "",
    },
    {
      id: "0003",
      author: "",
      title: "",
      content: "",
      uploadedTime: "",
      imageList: [
        {
          id: "image0001",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0002",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0003",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0004",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0005",
          src: "/assetss/upload-file.png"
        },
      ],
      commentList: [],
      commentCount: 0,
      favoriteCount: 0,
      userInMention: "",
    },
    {
      id: "0004",
      author: "",
      title: "",
      content: "",
      uploadedTime: "",
      imageList: [
        {
          id: "image0001",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0002",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0003",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0004",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0005",
          src: "/assetss/upload-file.png"
        },
      ],
      commentList: [],
      commentCount: 0,
      favoriteCount: 0,
      userInMention: "",
    },
    {
      id: "0005",
      author: "",
      title: "",
      content: "",
      uploadedTime: "",
      imageList: [
        {
          id: "image0001",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0002",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0003",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0004",
          src: "/assetss/upload-file.png"
        },
        {
          id: "image0005",
          src: "/assetss/upload-file.png"
        },
      ],
      commentList: [],
      commentCount: 0,
      favoriteCount: 0,
      userInMention: "",
    },
  ]);







  useEffect(() => {
 
  }, []);
  

  return (
    <>
      <main className={styles["pmdl"]}>
        
        {mainItemList.map((item) => (
            <section  key={item.id}   className={styles["each-item-section"]}   >
              <section className={styles["pisc"]}>
                <a className={styles.profile} href="/">
                  <img src="/assetss/basic-profile-img.png" width={49} height={49}></img>
                  <p className={styles["prfif"]}>
                    {/* 사용자 이름 */}
                    <span href="/">사용자 이름</span>
                  </p>
                </a>
                <ul className={styles["blist"]}>
                  <li>
                    <button>
                      <img
                        src="/images/more.svg"
                        alt="더보기"
                        width={30}
                        height={30}
                      ></img>
                    </button>
                  </li>
                </ul>
              </section>
              <section className={styles["ptxt"]}>
                <p   className={styles["ptxt-content"]}>
                  게시글 내용 자리 표시
                </p>
                <div   className={styles["ptxt-wrap-image"]}  >
                  {item.imageList.map((imgItem) => (
                    <img  src={imgItem.src}    width={100} height={100}></img>
                  ))}
                </div>
              </section>
              <section   
                className={styles["each-item-bottom"]}  
              >
                <ul className={styles["button-list-bottom"]}>
                  <li>
                  </li>
                  <li   className={styles["li-button"]}>
                  </li>
                  <li>
                  </li>
                </ul>
                <ul    className={styles["button-list-sub"]}>
                  <li>
                  </li>
                </ul>
              </section>
            </section>
          )
        )}

      </main>
    </>
  );
}
