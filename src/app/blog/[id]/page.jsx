import React from "react";
import styles from "./page.module.css";
import Image from "next/image";


const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum</h1>
          <p className={styles.desc}>
           Lorem ipsum
          </p>
          <div className={styles.author}>
            <Image
                src="https://images.pexels.com/photos/16353919/"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
              src="https://images.pexels.com/photos/16353919/"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         lorem ipsum
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
