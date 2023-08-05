import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData({id}){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
     // next:{ revalidate:10}
     cache:"no-store"
  });

  if(!res.ok){
  //    throw new Error('Failed to fetch data');
      notFound()
    }

  return res.json();
}


const BlogPost = async ({params}) => {

  const data = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum</h1>
          <p className={styles.desc}>
         {data.title}
          </p>
          <div className={styles.author}>
            <Image
                src="https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              src="https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
